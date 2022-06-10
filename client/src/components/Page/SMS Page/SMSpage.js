import React from 'react';
import { useLocation } from "react-router-dom"
import './SMSpage.css'

const SMSpage = () => {
    const params = useLocation();
    const {name, phone} = params.state
    console.log(params);
    return <div>
        <h3><span>Name: </span>{name}</h3>
        <h3><span>Phone: </span>{phone}</h3>
        <input type='text'/>
        <button>Send OTP</button>
    </div>
}

export default SMSpage;