import { useNavigate } from "react-router-dom";
import Centered from "../Centered";
import Card from "./Card";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth()
    const actionHandler = async(type : "primary" | "secondary", email ?: string, password ?: string) =>{
        try {
            if(type==='secondary') navigate('/forgot-password')
            else{
                setLoading(true);
                await login(email!, password!);
                navigate('/admin');
            }
        } catch (error) {
            console.error(error);
            setError('Failed to Login');
        }
        setLoading(false);
    }
    return(<Centered>
                <Card title="Login"
                     error={error} 
                     loading={loading}
                     action={actionHandler} 
                     actionPrimary="Submit" 
                     actionSecondary="Forgot Password?"/>
            </Centered>)
}
export default Login;