import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import JobStructure from "./JobStructure";



function Jobs() {
    const [role, setRole] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [employer, setEmployer] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [datas, setDatas] = useState([]);
    const [responsibility, setResponsibility] = useState();
    const dataList = [];
    function getDatas() {
        axios.get("http://localhost:8080/empl/get")

            .then((response) => {
                setDatas(response.data);
                console.log("response.data: ", response.data);
            })

            .catch(console.log())
        console.log("Employment data: ", datas);
    }
    useEffect(() => { getDatas() }, [])

    for (const data of datas) {
        dataList.push(
            <JobStructure
            key={data.id}
           id={ data.id}
           role={ data.role}
           startDate={data.startDate}
           endDate={ data.endDate}
            employer={data.employer}
           jobDesc={data.jobDescription}
           resp= {data.responsibility}
            />
        );

    }


    return (
        <div >
            <h2 style={{color:"white", textAlign:"center"}}>Employment History</h2>
            <div style={{ width: "50%", columnCount: "3",border:"solid", }}>

                <div > {dataList}</div>


            </div>
            <div className="card" style={{ width: "30%", margin: "50px", float: "right",position:"fixed",top:"30px",right:"0" }}>
            <h4>Add New Employment</h4>
                <Form
                
                onSubmit={e => {

                    e.preventDefault();
                    // handleSubmit();
                    axios.post("http://localhost:8080/empl/create", { role, startDate, endDate, employer, jobDescription })

                        .then(response => {

                            setRole("Enter Job Role");
                            setStartDate("Enter Start Date");
                            setEndDate("Enter End Date");
                            setEmployer("Enter Employer Details");
                            setJobDescription("Enter Job Description");
                            setResponsibility("Enter responsiblities in the role")
                            getDatas();

                        })

                        .catch(err => console.error(err))

                }
                }
                >
                    <Form.Group className="mb-3"  >
                        <Form.Label style={{ width: "30%" }}><b>Role</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Role" value={role} onChange={e => setRole(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label style={{ width: "30%" }} ><b>Start Date</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Start Date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label style={{ width: "30%" }}><b>End Date</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter End Date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label style={{ width: "30%" }}><b>Employer</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Employer Details" value={employer} onChange={e => setEmployer(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label style={{ width: "30%" }}><b>Job Description</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Description" value={jobDescription}onChange={e => setJobDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label style={{ width: "30%" }}><b>Job Responsibilities</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter responsiblities in the role" value={responsibility}onChange={e => setResponsibility(e.target.value)} />
                    </Form.Group>

                    <Button style={{ float: "right", margin: "30px", width: "100px", color: "#fdc1da", backgroundColor: "#11663f" }} variant="success" type="submit" >
                        <strong>Submit</strong>

                    </Button>

                </Form>
            </div>
        </div>
    );
}

export default Jobs;