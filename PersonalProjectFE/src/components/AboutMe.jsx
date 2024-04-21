import penPortrait from "../../src/pictures/penPortrait.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Rows from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myPhoto from '../../src/20220708_175821.jpg';
import profession from '../../src/profession.jpg'
import computer from '../../src/computer.jpg';
import training from '../../src/training.jpg';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AboutMe() {
  return (<div style={{ backgroundColor: "#012613" }} >




    {/* <div className="container text-center"> */}

    <div style={{ float: "left", backgroundColor: "#012613" }}>
      <div className="row" style={{ width: "100%", margin: "5px" }}>
        <div className="col" style={{ margin: "5px", backgroundColor: "white", borderRadius: "5%" }}>
          <h2 style={{ textAlign: "center" }}>Treesa Cherian</h2>
          <img src={myPhoto} alt=" Treesa Cherian" className="text-center"
            style={{
              borderRadius: "5%", width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}></img>
          <p style={{ textAlign: "center" }}><b>Junior Software Developer</b><br></br>
            <a href="mailto:treesa.cherian@lloydsbanking.com">treesa.cherian@lloydsbanking.com</a><br></br>
            07841338766<br></br>
            Location : Edinburgh</p>
        </div>
        <div className="col-6" style={{ margin: "5px", backgroundColor: "white", borderRadius: "2%" }}>
          <h6><u>Personal Summary:</u></h6>

          <p >
            <img img src={profession} alt=" professional"
              style={{
                borderRadius: "5%", width: "35%",
                float: "right",
                marginTop: "50px"
              }}></img>
            Edinburgh based LBG colleague recently trained to be software programmer with a
            vast knowledge of coding in various languages including C, Java, Spring boot, SQL
            Database, HTML, CSS, JavaScript, React, and Testing with Selenium. Have a good
            understanding of SDLC,RDBMS, Agile methodologies, Jira, Source control management
            Git Hub and Git Bash, Cloud Fundamentals, DevOps, CI/CD(Jenkins) etc.
            10 Years of service within LBG.

          </p>
          <img img src={computer} alt="computer"
            style={{
              borderRadius: "5%", width: "15%",
              float: "left",
              marginBottom:"0",
              marginTop:"50px"

            }}></img>


        </div>
        <div className="col" style={{ margin: "5px", marginRight: "15px", backgroundColor: "white", borderRadius: "5%" }}>
          <h6><u>Placements to date:</u></h6>
          <ul>
            <li><h6>Nov’2023 – To date</h6>
              <p>Junior Software Developer</p></li>
            <li><h6> Jul’2019 – Nov’2023</h6>
              <p>AML Analyst and
                Quality Coach , AML Support Team, Client
                Service Delivery</p></li>
            <li><h6>Nov’2014 – Jul’2019–</h6>
              <p>Customer Service
                advisor, New Customer Support, RBB</p></li>
            <li><h6>Mar’2014 – Oct’2014 </h6>
              <p>Processor, Contractor for LBG</p></li>
          </ul>
        </div>
      </div>


      <div className="row" style={{ width: "100%", margin: "5px" }}>

        <div className="col-8" style={{ margin: "5px", backgroundColor: "white", borderRadius: "2%" }}>
          <h6><u>Key Achievements/Deliverables to date:</u></h6>
          <ul>
            <li>Developed a full stack application of an online shopping website with front end using React JS, HTML, JavaScript and
              CSS and Back End using Java and Spring Boot</li>
            <li>Undergone an intense bootcamp training on software development. As part of the training, developed a front end “Real
              Estate agent” website using Json server as the data base. On the second phase, the website is amended by integrating
              the backend using Spring Boot, Java and MySQL. Finally used Selenium to test the functionality of the website</li>
            <li>ISEB/ISTQB Testing foundation certification</li>
            <li>Extensive knowledge of Anti Money Laundering policies and procedures</li>
            <li>Experience in working closely with Economic Crime Prevention team to ensure the Group adhere to the FCA regulations</li>
            <li>Coaching peers as individuals and as team on various aspects of AML policies</li>
            <li>Champion in customer Risk assessment</li>
            <li>Experience in using various customer management tools such as COTJ Pega, Pega 7, Pega CLM, COM, MWS etc</li>
            <li>Compliance Due diligence</li>
            <li>General business account managements</li>
          </ul>
        </div>
        <div className="col" style={{ margin: "5px", marginRight: "15px", backgroundColor: "white", borderRadius: "3%" }}>
          <h6><u>Professional Qualification/Training:</u></h6>
          <ul>
            <li>3 months intense bootcamp training in computer programming followed by 3 months of incubation lab</li>
            <li>ISEB/ISTQ Testing Foundation Level</li>
            <li>Master of Computer Application (India)</li>
            <li>Batchelor of Science – Mathematics with
              additional subjects – Physics and Statistics(India)</li>
            <li>A level Equivalent – English, Maths, Physics,Chemistry</li>
          </ul>
          <img img src={training} alt=" professional"
              style={{
                borderRadius: "5%", width: "25%",
                // float: "right",
                // marginTop: "50px"
                marginLeft:"37%"
              }}></img>
        </div>
      </div>
    </div>




    {/* <div className="rows">
    <div className="column side">
      <h2>Side</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
    </div>
    
    <div className="column middle">
      <h2>Main Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
    </div>
    
    <div className="column side">
      <h2>Side</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
    </div>
  </div> */}
  </div>
  );

}

export default AboutMe;