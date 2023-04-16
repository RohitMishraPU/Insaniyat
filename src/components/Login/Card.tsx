import { FormEvent, useRef } from "react";

type Props = {
  title : React.ReactNode;
  error : string;
  message ?: string;
  loading ?: boolean;
  action: (type : "primary" | "secondary", email?:string, password?:string) => void;
  showPassword?:boolean;
  actionPrimary ?: React.ReactNode | string;
  actionSecondary ?: React.ReactNode |string;
}

const Card = ({title, action, actionPrimary, actionSecondary, showPassword = true, error, message, loading = false} : Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const actionHandler = (event: FormEvent<HTMLFormElement>)=> {
      event.preventDefault();
      const emailInput = emailRef.current;
      const passwordInput = passwordRef.current;
    
      if (emailInput && passwordInput) {
        action('primary', emailInput.value, passwordInput.value);
      }else if(!showPassword && emailInput){
        action('primary', emailInput.value);
      }
    }
  return <div className="flex relative flex-col rd bg-gradient-to-r from-indigo-600 to-cyan-400 text-black text-op-80 w-96">
            <div className="flex flex-col flex-auto p-4"> 
              <div className="flex items-center text-2xl font-600 gap-2 mb-3"> 
                { title}
              </div>
              {error || message && <div className={`flex justify-center items-center w-auto rd-2 p-2 mb2 ${error ? 'text-red-8 bg-red-3' : ''} ${message ? 'text-green-8 bg-green-3' : ''}`}>{error || message}</div>}
              <form className="flex justify-center flex-col gap-2" onSubmit={actionHandler}>
                <div className="flex flex-col">
                    <label className="mb1 font-400">Email</label>
                    <input type="email" ref={emailRef} placeholder="Enter your email"  className="b-indigo-400 b rd-2 h-8 px-4 bg-white text-gray"/>
                </div>
                {showPassword &&<div className="flex flex-col">
                  <label className="mb1 font-400">Password</label>
                  <input type="password" ref={passwordRef} placeholder="password" className="b-indigo-400 b rd-2 h-8 px-4 bg-white text-gray"/>
                </div>}
                <div className="justify-end flex flex-wrap items-start gap-2 pt-4">
                  <button type="submit" className="bg-blue-500 px-4 py-1" disabled={loading}>{actionPrimary}</button>
                  <button className="bg-blue-500 px-4 py-1" onClick={e => {
                    e.preventDefault();
                    action("secondary");
                  }} disabled={loading}>{actionSecondary}</button>
                </div>

              </form>
            </div> 
     </div>;
}

export default Card;
