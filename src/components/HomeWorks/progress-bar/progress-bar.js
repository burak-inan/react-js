import React, { useState } from "react";
import "./progress-bar.scss";
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa"

const ProgressBarHw = () => {

  const [progress, setProgress]= useState(0);

  console.log(progress);

  // eslint-disable-next-line no-unused-expressions
  progress < 0 ? setProgress(0) : progress;


  return (
    <div className="progress-hw">
      <h2>State Progress Bar</h2>
      <button className="btn"><FaPlusCircle style={{fontSize: "40px", color:"green"}} onClick={ ()=> setProgress(progress+10)}/></button>
      <button className="btn"><FaMinusCircle style={{fontSize: "40px", color:"red"}} onClick={ ()=> setProgress(progress-10)}/></button>
      

      <div className="bar">
        <label htmlFor="file">Downloading progress:</label>
        <progress id="file" value={progress} min="0" max="100">
          32%
        </progress>
      </div>
    </div>
  );
};

export default ProgressBarHw;
