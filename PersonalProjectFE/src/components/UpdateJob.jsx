import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function UpdateJob() {

    const [role, setRole] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [employer, setEmployer] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [datas, setDatas] = useState([]);
    const [responsibility, setResponsibility] = useState();
    const params = useParams("");
    const navigate = useNavigate();
    let rol;

    // console.log("role:",props);
    useEffect(() => {
        axios.get("http://localhost:8080/empl/get/" + params.id)
            .then((response) => {
                setRole(response.data.role);
                setStartDate(response.data.startDate);
                setEndDate(response.data.endDate);
                setEmployer(response.data.employer);
                setJobDescription(response.data.jobDescription);
                setResponsibility(response.data.responsibility);

            }).catch(error => console.error(error));
    }, []);



    // axios.get("http://localhost:8080/empl/get/" + params.id)

    //     .then((response) => {
    //         // setDatas(response.data);
    //         setRole(response.data.role);
    //         setStartDate(response.data.startDate);
    //         setEndDate(response.data.endDate);
    //         setEmployer(response.data.employer);
    //         setJobDescription(response.data.jobDescription);
    //         setResponsibility(response.data.responsibility);
    //         // console.log("response.data: ", response.data);
    //     })

        rol=role;
    return (
        <>


            <Form 

                onSubmit={e => {
                    console.log("params.id:", params.id);
                    console.log(("role:", role));
                    e.preventDefault();
                    // handleSubmit();
                    axios.patch("http://localhost:8080/empl/update/" + params.id, { role, startDate, endDate, employer, jobDescription, responsibility })

                        .then(response => {

                            // setRole("");
                            // setStartDate("");
                            // setEndDate("");
                            // setEmployer("");
                            // setJobDescription("");
                            // setResponsibility("")

                            navigate('/jobs')

                        })

                        .catch(err => console.error(err))

                }
                }
            >

{/* <div style={{ marginLeft: "28px" }} label htmlFor="role" className="form-label"><strong>Role</strong>
                    <input size="50"
                        id="role"
                        className="form-control border border-success rounded" 
                        style={{ display: "inline-block", width: "250px", height: "37px", margin: "10px", marginLeft: "20px" }}
                        type="text"
                        placeholder={role}                    
                        //    value={role} contentEditable="true"
                        onChange={e =>  { setRole(e.target.value); console.log(e.target.value); console.log("role:", role) }}

                    />

                </div> */}
                <Form.Group className="mb-3" id="role" >
                    <Form.Label style={{ width: "30%", color:"white"  }}>Role</Form.Label>
                    <Form.Control type="text" placeholder="role" value={role} onChange={e => { setRole(e.target.value); console.log(e.target.value); console.log("role:", role) }} />

                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label style={{ width: "30%", color:"white" }} >Start Date</Form.Label>
                    <Form.Control type="text" placeholder={startDate} onChange={e => setStartDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label style={{ width: "30%", color:"white" }}>End Date</Form.Label>
                    <Form.Control type="text" placeholder={endDate} onChange={e => setEndDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label style={{ width: "30%", color:"white" }}>Employer</Form.Label>
                    <Form.Control type="text" placeholder={employer} onChange={e => setEmployer(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label style={{ width: "30%", color:"white" }}>Job Description</Form.Label>
                    <Form.Control type="text" placeholder={jobDescription} onChange={e => setJobDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label style={{ width: "30%",  color:"white"}}>Job Responsibilities</Form.Label>
                    <Form.Control type="text" placeholder={responsibility} onChange={e => setResponsibility(e.target.value)} />
                </Form.Group>

                <Button style={{ float: "right", margin: "30px", width: "100px", color: "#white", backgroundColor: "#11663f" }} variant="success" type="submit" >
                Submit

                </Button>

            </Form >

        </>
    );
}


export default UpdateJob;