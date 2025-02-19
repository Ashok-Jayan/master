import React from "react";
import { useNavigate } from "react-router";

const Training = (props) => {

    
    return <><div className="text-trng"><p className="para">{props.company}!</p>
        <p className="para">{props.car}</p>
        <p className="para">{props.year}</p>
    </div></>
};

export default Training
