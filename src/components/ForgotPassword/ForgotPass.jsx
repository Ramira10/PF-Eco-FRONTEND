import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/actions/user";
import Footer from "../Footer/Footer";
import style from './ForgotPass.module.css'

export default function ForgotPass(){
    
    const [email, setEmail] = useState()
    const dispatch =  useDispatch()

    function handleSetEmail(e){
        e.preventDefault()
        setEmail(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(forgotPassword(email))
    }

    // console.log(email)
    return(
        <div className={style.box}>
            <div className={style.container}>
            <h1>Forgot password</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label for='email'>Email:</label>
                <input className={style.input_email} type='email' name='email' id='email' onChange={e => handleSetEmail(e)}/>
                <br/>
                <input className={style.mybtn} type='submit' />
            </form>
            </div>
            <Footer/>
        </div>
    )
}