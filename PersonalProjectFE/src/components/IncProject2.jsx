import { Button } from "react-bootstrap";
import inpro21 from '../pictures/incpro21.PNG'
import inpro22 from '../pictures/inpro22.PNG'
import inpro23 from '../pictures/inpro23.PNG'
import inpro24 from '../pictures/inpro24.PNG'
import inpro25 from '../pictures/inpro25.PNG'
import inpro26 from '../pictures/inpro26.PNG'
import Carousel from 'react-bootstrap/Carousel';
import git from '../pictures/gitc.png'
import { useNavigate } from "react-router-dom";
function IncProject2 () {
    const navigate = useNavigate();
    return ( 
<div style={{width:"60%",marginLeft:"200px",height:"900px", marginBottom: "100px" }}>
{/* <a  href="https://github.com/treesacherian/IncProject2FE.git" style={{ marginBottom: "100px" }}><img src={git} style={{ width: "5%", marginBottom: "50px",float:"right" }} /> </a> */}
<Carousel data-bs-theme="dark" >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={inpro21}
          alt="First slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={inpro22}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={inpro23}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={"d-block w-100"}
          src={inpro24}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={"d-block w-100"}
          src={inpro25}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={"d-block w-100"}
          src={inpro26}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>

    <img src={git} style={{ width: "5%", marginTop:"10px",marginBottom: "50px", marginRight:"10px",float:"left" }} />
<a href="https://github.com/treesacherian/IncProject2FE.git">git hub for Front End</a><p></p>
<a href="https://github.com/adelewatkins/Project2BackEnd.git">git hub for Back End</a>
<Button style={{ float: "right", margin: "30px", width: "100px", color: "#white", backgroundColor: "#11663f" }} variant="success" type="submit" onClick={(e)=>navigate('/reskilling')} >
                    Back

                </Button>
</div>


     );
}

export default IncProject2 ;