import React, { useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const register = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword }
        axios.post('http://localhost:8000/register', newUser , { withCredentials: true, })
            .then((res) => {console.log(res);})
            .then(navigate("/dash"))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                navigate('/')
            })
    };
    
    return <div>
        <form onSubmit={register}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className="form">
                <div className="subtitle">Create an account!</div>
                <div className="input-container ic1">
                    <input className="input" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Last name</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Email</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Password</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Confirm Password</label>
                </div>
                <button type="text" className="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default Register;