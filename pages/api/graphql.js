import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {Neo4jGraphQL} from "@neo4j/graphql"
import neo4j from "neo4j-driver"

const typeDefs = gql`
type Distribution @exclude(operations: [CREATE, UPDATE, DELETE]){
id: Int
name: String
url: String
imageurl: String
dbtype: Database @relationship(type:"IS_A", direction: OUT)
licenses: [Licence] @relationship(type:"IS_LICENSED_UNDER", direction: OUT)
features: [Feature] @relationship(type:"ALLOWS", direction: OUT)
current_release: Release @relationship(type:"CURRENT_RELEASE", direction: OUT)
support: [Language] @relationship(type:"HAS_API_FOR", direction: OUT)
}

type Database @exclude(operations: [CREATE, UPDATE, DELETE]){
id:Int
type:String
distribution: [Distribution] @relationship(type:"IS_A", direction:IN)
}

type Licence @exclude(operations: [CREATE, UPDATE, DELETE]){
id:Int
name:String
issued: [Distribution] @relationship(type:"IS_LICENSED_UNDER", direction: IN)
}

type Feature @exclude(operations: [CREATE, UPDATE, DELETE]){
id:Int
type:String
supported_by: [Distribution] @relationship(type:"ALLOWS", direction: IN)
}

type Release @exclude(operations: [CREATE, UPDATE, DELETE]){
id:Int
version:String
current_release: [Distribution] @relationship(type:"CURRENT_RELEASE", direction: IN)
}

type Language @exclude(operations: [CREATE, UPDATE, DELETE]){
id: Int
name: String
support: [Distribution] @relationship(type:"HAS_API_FOR", direction: IN)
}
`;

const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const neoSchema = new Neo4jGraphQL({typeDefs, driver})

const apolloServer = new ApolloServer({
    schema: neoSchema.schema,
    typeDefs,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};