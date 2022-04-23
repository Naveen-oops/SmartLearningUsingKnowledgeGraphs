import Link from 'next/link'
import Tour from '../components/Tour';

const home = () => {
    return (
    <div>
        <center> <Tour /> </center> 
        <h2><center>SMART LEARNING USING KNOWLEDGE GRAPH</center></h2>
        <p><b><i><font color="#0070f3">Edu</font>Graph</i></b> is a knowledge graph that provides a comprehensive learning method for understanding educational concepts in the Computer Science domain.</p>
        <section>    
            <li>Learn smarter way with the help of graphs</li>
            <li>Not only informative but also visual treat for eyes</li>
            <li>Simple, clear and interactive graph for each study topics</li>
            <li>Let’s make a revolution in learning !!</li>
        
        <h3 className='about-project'>About the project:</h3>
        Our project aims in helping students to learn visually with the help of knowledge graphs(or concept maps). The Graphs for various subjects will be available separately and can be used by students to learn interactively. All graphs are made in such a way to make visual impact to learners such that it is easy to read and interpret. 
        
        <h3>Why <b><font color="#0070f3">Edu</font>Graph</b>?</h3>
        In today’s world student cannot rely on single source of textbook for learning. The knowledge is scattered around the internet. The internet is a good way to access all knowledge, but the main problem is that there is too much data which makes the reader overwhelming.
        
        <h3>Power of visualization:</h3>
        A picture tells more than a 1000 words… Picture have been used to convey information long before the development of writing. Humans can understand visual data more easily than lengthy texts.

        <h3>Technologies involved:</h3>
        NLP, Data visualization, Web technology
        </section>

        <p><center>Using this application, walkthrough the curated knowldge graphs of some Computer Science concepts</center></p>
        <center><Link href="/kg" passHref><button className='view-graph'>Ready</button></Link></center>
        <style jsx>
        {`
            h2{
                color: #f54257;
            }

            button{
                background-color: #0099ff;
                margin: 0px;
                padding: 12px;
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 15px;
            }
        `}
</style>
    </div>   
    );
};

export default home;
