
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
function Calculator() {
    const [number, setNumber] = useState();
    const [inputString, setInputString] = useState("");
    const [input, setInput] = useState(0);
    // console.log("input:", input);
    var last = '7';





    function handleClick() {

        console.log("result: ", eval(inputString));
        setInputString(eval(inputString));
    }
    function handleChange() {
        setInputString(inputString);
        console.log("inputString:", inputString);



    }

    function handleDelete() {
        var newStr = "";
        var newString = inputString.split("");
        newString.pop();

        for (let i = 0; i < newString.length; i++) newStr = newStr.concat(newString[i]);
        setInputString(newStr);
        console.log("newStr :", newStr);
    }


    return (<>


        {/* <div className="container text-center" style={{backgroundColor:"white",width:"20%", margin:"10px",marginTop:"20px"}}> */}
        <div className="container text-center" style={{ borderRadius:"10px", backgroundColor: "#012613", width: "auto", margin: "10px",marginTop:"5px",border:"solid", borderColor:"white", borderStyle:"groove", }}>
            <div className="row" style={{ marginTop: "20px" ,marginLeft:"20px" }}>
                <input style={{ width: "170px", }}
                    type="text"
                    value={inputString}
                    placeholder='0'
                    onChange={() => handleChange}
                />
            </div>

            <div className="row" style={{ marginTop: "10px",marginLeft:"20px" }}>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }}
                    onClick={handleDelete}
                >
                    &lt;-
                </button>

                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }}
                    onClick={(e) => setInputString(inputString + "%")}
                >
                    %
                </button>



                <button type="button" className="btn btn-success" style={{ width: "70px", height: "40px" }} onClick={handleClick}>
                    =
                </button>

                <div className="row">
                    {/* <button className="col" onClick={() => setInputString(inputString + 7)}> */}
                    <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 7)}>
                        7
                    </button>
                    <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 8)}>
                        8
                    </button>
                    <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 9)}>
                        9
                    </button>
                    <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + ' / ')}>
                        /
                    </button>
                </div>
            </div>
            <div className="row" style = {{marginLeft:"20px"}}>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 4)}>
                    4
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 5)}>
                    5
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 6)}>
                    6
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + '*')}>
                    *
                </button>
            </div>
            <div className="row" style = {{marginLeft:"20px"}}>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 1)}>
                    1
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 2)}>
                    2
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 3)}>
                    3
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + '-')}>
                    -
                </button>
            </div>
            <div className="row" style = {{marginLeft:"20px"}}>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString("")}>
                    C
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + 0)}>
                    0
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + '.')}>
                    .
                </button>
                <button type="button" className="btn btn-primary" style={{ width: "auto", margin: "5px" }} onClick={() => setInputString(inputString + '+')}>
                    +
                </button>
            </div>

        </div>


    </>);
}

export default Calculator;