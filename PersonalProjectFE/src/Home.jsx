import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import React from 'react';
import ReactDom from 'react-dom';
import Calculator from './components/Calculator'
import xmas from './pictures/xmas2.jpg'
import Popup from 'reactjs-popup';



function Home() {

    const [num, setNum] = useState();
    const [num1, setNum1] = useState();
    const [result, setResult] = useState();
    const [word, setWord] = useState();
    const [output, setOutput] = useState();
    const [romanOutput, setRomanOutput] = useState("");
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    var toDay = new Date();
    const year = toDay.getFullYear();
    const month = toDay.getMonth();
    const day = toDay.getDate();
    const [count, setCount] = useState();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDay = weekDays[toDay.getDay()];
    const monthName = months[month]
    // console.log(date.getFullYear());

    useEffect(() => {

        countDown();

    }, [])


    function countDown() {
        let one_day = 1000 * 60 * 60 * 24;

        // To set present_dates to two variables
        // let present_date = new Date();

        // 0-11 is Month in JavaScript
        let christmas_day =
            new Date(toDay.getFullYear(), 11, 25);

        // To Calculate next year's Christmas if passed already.
        if (toDay.getMonth() ==
            11 && toDay.getDate() > 25) {
            christmas_day.setFullYear(christmas_day.getFullYear() + 1);
        }

        // To Calculate the result in milliseconds and 
        // then converting into days
        let Result = Math.round((christmas_day.getTime() -
            toDay.getTime()) / one_day);

        // To remove the decimals from the (Result) 
        // resulting days value
        let Final_Result = Result.toFixed(0);

        // To display the final_result value
        console.log("Number of days remaining till Christmas:\n" +
            toDay.toDateString() + " and " +
            christmas_day.toDateString() +
            " is: " + Final_Result + " days");

        setCount(Final_Result);
    }



    function checkPrime() {

        console.log("num: ", num);
        if (num == 1 ) setResult(num + " is not a PRIME NUMBER");
        if (num == 2 ) setResult(num + " is  a PRIME NUMBER");
        else {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    setResult(num + " is not a PRIME NUMBER");
                    break;
                }
                else

                    setResult(num + " is  a PRIME NUMBER");

            }
            console.log("result: ", result);
        }
    }


    function checkPalindrome() {
        var splitString = word.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        if (word&&word.toLowerCase() === joinArray.toLowerCase()) setOutput(word + " is a palindrome")
        else if(word)setOutput(word + " is NOT a palindrome")
    }

    function convertToRoman() {
        var denom = [1000, 500, 100, 50, 10, 5, 1]
        var letter = ["M", "D", "C", "L", "X", "V", "I"]
        var division;
        var output = "";
        var mod, newNumber;
        newNumber = num1;

        for (let i = 0; i < denom.length; i++) {
            if (!newNumber) break;

            if (newNumber === 4) { output += "IV"; break; }
            if (newNumber === 9) { output += "IX"; break }
            if (newNumber >= 40 && newNumber < 50) { output += "XL"; newNumber %= 40; continue; }
            if (newNumber >= 90 && newNumber < 100) { output += "XC"; newNumber %= 90; continue; }
            if (newNumber >= 400 && newNumber < 500) { output += "CD"; newNumber %= 400; continue; }
            if (newNumber >= 900 && newNumber < 1000) { output += "CM"; newNumber %= 900; continue; }
            division = parseInt(newNumber / denom[i]);
            console.log("division", division);
            mod = newNumber % denom[i];
            newNumber = mod
            for (let j = 1; j <= division; j++) {
                output += letter[i];
            }

        }
        console.log("output:", output);
        if(num1)setRomanOutput("Roman Numerals equivalent to " + num1 + " is " + output);
    }




    return (
        <div div style={{height:"1000px"}}>
            <aside>
                <div className="prime">

                    <p>  
                    <Popup trigger=
                        {<button  style={{  border: "none", color: "white", background: "none" }}><u>PRIME</u> </button>}

                        position="left center">
                            <p  style={{color:"white", marginRight:"25px"}}>PRIME number a whole number greater than 1 that 
                            cannot be exactly divided by any whole number other than itself and 1</p>
                    </Popup>
                    Number check</p>
                    
                    <form onSubmit={e => {

                        e.preventDefault();
                        checkPrime();
                        setNum("");
                    }
                    }
                    >

                        {/* <div label htmlFor="num">Enter a number</div> */}
                        <input type="number"
                            value={num}
                            placeholder="Enter a number"
                            onChange={e => setNum(e.target.value)} />

                        <button className="btn btn-secondary" style={{ width: "auto", margin: "5px"}} type="submit">Enter</button>
                        <button className="btn btn-secondary" style={{ width: "auto", margin: "5px"}} onClick={(e)=>setResult("")}>Clear</button>
                    </form>
                    {result}

                </div>




                <div className="palin">
                    {/* <p>Check for Palindrome</p> */}

                    <p>   Check for
                    <Popup trigger=
                        {<button  style={{  border: "none", color: "white", background: "none" }}><u>PALINDROME</u> </button>}

                        position="left center">
                            <p  style={{color:"white", marginRight:"100px"}}>PALINDROME is a word that reads the same backwards as forwards</p>
                    </Popup>
                    </p>

                    <form onSubmit={e => {

                        e.preventDefault();
                        checkPalindrome();
                        setWord("");
                    }
                    }
                    >

                        {/* <div label htmlFor="word">Enter a word</div> */}
                        <input type="text"
                            value={word}
                            placeholder="Enter a word"
                            onChange={e => setWord(e.target.value)} />

                        <button className="btn btn-secondary" style={{ width: "auto", margin: "5px"}} type="submit">Check</button>
                        <button className="btn btn-secondary" style={{ width: "auto", margin: "5px"}} onClick={(e)=>setOutput("")}>Clear</button>
                    </form>
                    {output}
                   { console.log("output:",{output})}
                </div>

                <div className="roman">
                    <p>Convert to Roman Numerals</p>
                    <form onSubmit={e => {

                        e.preventDefault();
                        convertToRoman();
                        setNum1("");
                    }
                    }
                    >

                        {/* <div label htmlFor="num">Enter a whole number&lt;5000</div> */}
                        <input type="number"
                            value={num1}
                            placeholder="Enter a number < 5000"
                            onChange={e => setNum1(e.target.value)} />

                        <button className="btn btn-secondary" style={{ width: "auto", margin: "5px"}} type="submit">Convert</button>
                        <button className="btn btn-secondary" style={{ width: "auto", margin: "5px"}} onClick={(e)=>setRomanOutput(" ")}>Clear</button>
                    </form>
                    {romanOutput}
                </div>
                <Calculator />
            </aside>



            


            <table className="calendar" style={{borderRadius:"10px"}}   >
               
                   <div style={{ backgroundColor: "red",borderTopRightRadius:"10px", borderTopLeftRadius:"10px"}}>
                    <div style={{  fontSize: "30px", padding: "5px", marginLeft: "70px" }} ><tr  > {monthName}&nbsp;{year}</tr></div>
                    </div>
                   <div style={{marginLeft:"125px"}}>
                   <tr style={{ fontSize: "80px", padding: "5px", textAlign: "center", }} >{day}</tr>
                   </div>
                    
                    <tr></tr>
                    <div style={{marginLeft:"40px"}}>
                    <tr style={{ fontSize: "40px", textAlign: "center" }}  >{weekDay}</tr>
                    </div>
                   
                    <div style={{ borderTop: "solid" ,textAlign:"center",paddingLeft:"70px"}} ><tr style={{ fontSize: "40px",}}  >{time}</tr></div>

               
            </table>

            <p style={{color:"white", fontFamily:"cursive", fontSize:"80px"}}> <b>{count} days till Christmas</b></p>
            <img src={xmas} alt="santa and reindeer" style={{float:"right"}}></img>


            {/* <div style={{ backgroundColor: "white", width: "30%" }}><p> {count} days till Christmas</p></div>
            <p> {count} days till Christmas</p> */}









        </div>
    );
}

export default Home;