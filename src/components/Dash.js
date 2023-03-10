import React from "react";
import "./style.css";
import logofd from "../images/download.png";
// import convertCsvToJsonAndSave from './convertCsvToJsonAndSave';
// import {CSVReader} from "react-papaparse"


function Dash() {

  const handleButtonClick = async () => {
   
  }

  return (
    
    <div className="container-fluid bx">
    <div className="t">
        <div className="h">
            <h1>Students</h1>
            <h5>List of all students in database</h5>
        </div>
        <div className="b">
            <button type="button" className="b1 btn btn-light" onClick={handleButtonClick}>  Import students</button>
            <button type="button" className="b2 btn btn-dark"> <img className="dw" src={logofd} alt="" /> Export as CSV</button>
        </div>
    </div>
    
     <br />
    <div className="tb">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No.</th>
          <th>Address</th>
          <th>Institute</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arav</td>
          <td>1962001</td>
          <td>
                10/1, Main Street, <br /> Gandhi Nagar, <br /> Bangalore - 560008, <br /> Karnataka
          </td>
          <td>LNM Institute of Technology</td>
          <td>Computer Science</td>
        </tr>
        <tr>
          <td>Dhruv</td>
          <td>1473502</td>
          <td>Door No. 12-2-417/A, <br /> Bank Colony Road, <br /> Ruknuddin Bagh, Hyderabad - 500032, <br /> Telangana</td>
          <td>DEF Management Institute</td>
          <td>Masters of Business Administration</td>
        </tr>
        <tr>
          <td>Sahil</td>
          <td>1762503</td>
          <td>H.No. 8-2-123/456, <br /> Sri Nagar Colony, Road No. 1, <br /> Banjara Hills, Hyderabad - 500034, <br /> Telangana</td>
          <td>MNO Medical College</td>
          <td>Bachelor of Medicine and Surgery</td>
        </tr>
      </tbody>
    </table>
    </div>

    </div>
  );
}

export default Dash;
