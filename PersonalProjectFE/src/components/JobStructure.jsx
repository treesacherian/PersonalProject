import PropTypes from "prop-types";
import Popup from 'reactjs-popup';
import JobDetails from './JobDetails';
import UpdateJob from './UpdateJob'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function JobStructure(props) {

    var displayStatus;
    const navigate = useNavigate();
    const [role, setRole] = useState("");

    if (!props.resp) displayStatus="none";
function handleClick(){
    // setRole( props.role);
    // console.log("role:",props.role);
    // <UpdateJob
    // id={ props.id}
    //        role={props.role}
    //        startDate={props.startDate}
    //        endDate={ props.endDate}
    //         employer={props.employer}
    //        jobDesc={props.jobDescription}
    //        resp= {props.responsibility}
    // />
    navigate("/update/"+props.id);
  
}


    return (
        <div>
            {/* <div style={{ border:"solid", width:"70%" }}> */}
            <div style={{ display: "inline-block", width: "auto", margin: "10px" }}>

                <div className="card" style={{ textAlign: "center", }}>
                    <p><b>{props.role}&nbsp;</b></p><p>{props.startDate}-{props.endDate}</p>
                    <p><b>{props.employer}</b></p>
                    <p>{props.jobDesc}</p>



                    <Popup trigger=
                        {<button  style={{display:displayStatus,  border: "none", color: "blue", background: "none" }}><u>more</u> </button>}

                        position="right center">
                            <JobDetails
                        resp={props.resp}/>
                    </Popup>
                    <button style={{ alignItems:"center", margin: "30px", width: "100px", color:"white", backgroundColor: "#11663f" }} variant="success" onClick={handleClick}>Update</button>



                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

JobStructure.propTypes = {
}
export default JobStructure;