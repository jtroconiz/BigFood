/* <div class="animation-ctn">
    <div class="icon icon--order-success svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
        <g fill="none" stroke="#22c55e" stroke-width="2"> 
            <circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
            <circle id="colored" fill="#22c55e" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
            <polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
        </g> 
        </svg>
    </div>
    </div>  */
import React from "react";
import { useNavigate } from 'react-router-dom';

const Closure = () => {
    const navigate = useNavigate();

    return (
        <>
            <div class="animation-ctn">
                <div class="icon icon--order-success svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
                    <g fill="none" stroke="#22c55e" strokeWidth="2">
                        <circle cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
                        <circle id="colored" fill="#22c55e" cx="77" cy="77" r="72" style={{ strokeDasharray: "480px, 480px", strokeDashoffset: "960px" }}></circle>
                        <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4" style={{ strokeDasharray: "100px, 100px", strokeDashoffset: "200px" }}/>
                    </g> 
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Closure;
