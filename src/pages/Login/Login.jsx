import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { supabase } from '../../supabase.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const user_auth = async (event) => {
        event.preventDefault();
        if (signState === "Sign In") {
            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email,
                    password
                })
            if (error) {
                toast.error(error.message)
            } else {
                toast.success("Login Successful")
                navigate('/')
                console.log(data)
            }

        } else {
            const { data, error } =
                await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            name: name
                        }
                    }
                })
            if (error) {
                toast.error(error.message)
            } else {
                navigate('/')
                toast.success("Signup Successful")
                console.log(data)
            }
        }
    }
    return (
        <div className='login'>
            <img src={logo} alt="" className='login-logo' />
            <div className="login-form">
                <h1>{signState}</h1>
                <form onSubmit={user_auth}>
                    {signState === "Sign Up" ? <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /> : <></>}
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === "Sign In" ? (
                        <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
                    ) : (
                        <p>Already Have an Account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login