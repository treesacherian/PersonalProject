import PropTypes from "prop-types";
import Popup from 'reactjs-popup';
import JobDetails from './JobDetails';



function JobStructure(props) {

    var displayStatus;

    if (!props.resp) displayStatus="none";
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



                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

JobStructure.propTypes = {
}
export default JobStructure;