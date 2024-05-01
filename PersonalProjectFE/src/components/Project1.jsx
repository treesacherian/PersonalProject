import pro11 from '../pictures/pro11.PNG'
import pro12 from '../pictures/pro12.PNG'
import pro13 from '../pictures/pro13.PNG'
import pro14 from '../pictures/pro14.PNG'
import git from '../pictures/gitc.png'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Project1() {
    const navigate = useNavigate();
    return (
        
            <div style={{ width: "60%", marginLeft: "200px",height:"900px", marginBottom: "100px" }}>
            {/* <a style={{ marginBottom: "100px" }} href="https://github.com/Paprryk/project1.git"><img src={git} style={{ width: "5%", marginBottom: "50px",float:"right" }} /> </a> */}
                <Carousel data-bs-theme="dark" style={{ marginTop: "50px", marginBottom: "50px", }}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={pro11}
                            alt="First slide"
                        />
                     
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pro12}
                            alt="Second slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pro13}
                            alt="Third slide"
                        />
                       
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className={"d-block w-100"}
                            src={pro14}
                            alt="Third slide"
                        />
                       
                    </Carousel.Item>
                </Carousel>

                <a style={{ marginBottom: "100px" }} href="https://github.com/Paprryk/project1.git"><img src={git} style={{ width: "5%", marginBottom: "250px", }} /> </a>
                <Button style={{ float: "right", margin: "30px", width: "100px", color: "#white", backgroundColor: "#11663f" }} variant="success" type="submit" onClick={(e)=>navigate('/reskilling')} >
                    Back

                </Button>

                </div>

                
           
            );
}



            export default Project1;