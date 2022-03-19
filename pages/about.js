import Head from 'next/head'
const about = () => {
  return (
  <div>
    <Head>
      <title>About Us</title>
    </Head>
    <h2><center>ABOUT US</center></h2>
    <section>
      <div className="card">
        <div className="card-image1"></div>
        <div className="card-text">
          <h3>Naveen Kumar K</h3>
          <p><a href="https://www.linkedin.com/in/naveenkumar-k-1122841a3/">LinkedIn profile</a></p>

        </div>
        </div>
        
        <div className="card">
        <div className="card-image2"></div>
        <div className="card-text">
          <h3>Akash Kumar K S</h3>
          <p><a href="https://www.linkedin.com/in/akashkumarks/">LinkedIn profile</a></p>

        </div>
        </div>

        <div className="card">
        <div className="card-image3"></div>
        <div className="card-text">
          <h3>Ritesh S</h3>
          <p><a href="https://www.linkedin.com/in/akashkumarks/">LinkedIn profile</a></p>

        </div>
        </div>

        <div className="card">
        <div className="card-image4"></div>
        <div className="card-text">
          <h3>Radha Krishnan R</h3>
          <p><a href="https://www.linkedin.com/in/radhakrishnanr7/">LinkedIn profile</a></p>

        </div>
        </div>
    </section>
    <style jsx>{`
section{
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  gap: 45px;
}

.card{
  display: grid;
  grid-template-columns: 250px; 
  grid-template-rows: 240px 120px;
  grid-template-areas: "image" "text";

  border-radius: 18px;
  background: #111; 
  box-shadow: 5px 5px 15px rgba (0,0,0,0.9);
  font-family: calibri;
  color: #fff;
  text-align: center;
}

.card-image1, .card-image2, .card-image3, .card-image4{
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  
}

.card-image1{
  background: url("image1.jpg");
  background-size: 100%;
}
.card-image2{
  background: url("image2.jpg");
  background-size: 100%;
}
.card-image3{
  background: url("image3.jpg");
  background-size: 100%;
}
.card-image4{
  background: url("image4.jpg");
  background-size: 100%;
}

.card-text{
  grid-area: text;
}
    `}</style>
  </div>
  );
};

export default about;
