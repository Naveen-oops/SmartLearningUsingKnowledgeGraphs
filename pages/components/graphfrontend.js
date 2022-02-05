import dynamic from 'next/dynamic';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import __ from 'lodash';

const NoSSRForceGraph = dynamic(() => import('../../lib/NoSSRForceGraph'), {
  ssr: false
});

const nosqlDistributions = gql`
{
  distributions(where: {name: "Neo4j"}){
    name
    id
    url
    imageurl
    __typename
    dbtype{
      id
      __typename
      type
    }
    support{
      id
      __typename
      name
    }
    features{
      id
      __typename
      type
    }
    licenses{
      id
      __typename
      name
    }
    current_release{
      id
      __typename
      version
    }
  }
}
`
const formatdata = (data)=>{
 // this could be generalized but let's leave that for another time
 //console.log(JSON.stringify(data));
 const nodes = [];
 const links = [];

 if (!data.distributions) {
   return;
 }

 // insert all Distri nodes
 data.distributions.forEach((a) => {
  
    if(a.name){ /* Distribution*/
    nodes.push({
        id: a.id,
        name: a.name,
        url: a.url,
        imageurl: a.imageurl,
        __typename: a.__typename,
    });
    }

  });

  //  insert other nodes & link it
  data.distributions.forEach((a)=>{
    
  if(a.name && a.dbtype.type){ /* Database & link to dist*/
    nodes.push({
      id: a.dbtype.id,
      name: a.dbtype.type,
      __typename: a.dbtype.__typename,
    });
 
      links.push({
      source: a.id,
      type: "IS_A",
      target: a.dbtype.id,
    });
   }
   a.features.forEach((f)=>{
 
     if(f.id){
       nodes.push({ /* Feature and link to id*/
         name: f.type,
         id: f.id,
         __typename : f.__typename,
       });
       
       links.push({
         source: a.id,
         type: "ALLOWS",
         target: f.id,
       });
     }
   });
   
   a.licenses.forEach((l)=>{
     
     if(l.id){
     nodes.push({ /* License*/
       id: l.id,
       __typename : l.__typename,
       name: l.name,
     });
     links.push({
       source : a.id,
       type: "IS_LICENSED_UNDER",
       target : l.id
     });
   }
 

    a.support.forEach((lang)=> {
      if(lang.id){    
        nodes.push({ /* language and link to dist*/
          name: lang.name,
          id: lang.id,
          __typename : lang.__typename
        });
  
        links.push({
          source: a.id,
          type: "HAS_API_FOR",
          target: lang.id,
        });
    }
  
    });
  
  });

  if(a.current_release.id){

    nodes.push({ /* Current release and link to distro*/
      name: a.current_release.version,
      id: a.current_release.id,
      __typename : a.current_release.__typename
    });

    links.push({
      source: a.id,
      type: "CURRENT_RELEASE",
      target: a.current_release.id,
    });
 }

 });

 return {
   // nodes may be duplicated so use lodash's uniqBy to filter out duplicates
   nodes : _.uniqBy(nodes, 'id'),
   links,
 };

};

export default function GraphFrontEnd() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  const {data} = useQuery(nosqlDistributions,{
    onCompleted: (data) => setGraphData(formatdata(data))
  });
  console.log(JSON.stringify(graphData));

  return (
  <NoSSRForceGraph 
    nodeLabel={"name"}
    nodeAutoColorBy = {"__typename"}
    nodeRelSize={8}
    graphData={graphData}  
    nodeCanvasObject={(node, ctx, globalScale) => {
      if (node.__typename === "Language" || node.__typename==="Licence"
      ||  node.__typename==="Database" ||  node.__typename==="Feature"
      ||  node.__typename==="Release") {
        const label = node.name;
        const fontSize = 15 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(
          (n) => n + fontSize * 0.2
        );
        //console.log(node.);
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);

        node.__bckgDimensions = bckgDimensions;
      } else if (node.__typename === "Distribution") {
        // TODO: draw image
        const size = 12;
        const img = new Image();
        img.src = "https://icon-library.com/images/neo-icon/neo-icon-21.jpg";
        ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size*2, size);
      }
    }}
    nodePointerAreaPaint={(node, color, ctx) => {
      ctx.fillStyle = color;
      const bckgDimensions = node.__bckgDimensions;
      bckgDimensions &&
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );
    }}
    onNodeClick={(node, event) => {
      console.log(node);
      if (node.__typename === "Distribution") {
        window.open(node.url, "_blank");
      }
    }}
    linkLabel="type"
    linkAutoColorBy = {"__typename"}
    linkWidth={1}

  />
  );
}

