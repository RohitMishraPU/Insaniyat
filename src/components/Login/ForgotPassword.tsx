import { useNavigate } from "react-router-dom";
import Centered from "../Centered";
import Card from "./Card";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth()
    const actionHandler = async(type : "primary" | "secondary", email ?: string) =>{
        try {
            if(type==='secondary') navigate('/login')
            else{
                setLoading(true);
                await resetPassword(email!);
                setMessage('Check your inbox for further instructions');
            }
        } catch (error) {
            console.error(error);
            setError('Failed to reset Password');
        }
        setLoading(false);
    }
    return(<Centered>
                <Card title="Password Reset"
                     loading = {loading}
                     error={error} 
                     message={message}
                     action={actionHandler} 
                     showPassword={false}
                     actionPrimary="Reset" 
                     actionSecondary="Login"/>
            </Centered>)
};

export default ForgotPassword;