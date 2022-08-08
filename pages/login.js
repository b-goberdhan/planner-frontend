import { useState } from "react";


export default function Login({hasError}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="w-full h-full flex justify-center items-center">
           <div className="w-full max-w-xs">
                <form action="/api/login" method="post" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="email" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username"/>
                        </div>
                        <div class="">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******************"/>
                            
                            </div>
                        { hasError && <p class="text-center text-red-500 text-sm">Incorrect email or password</p>}
                        <div class="mt-4 flex items-center justify-between">
                            <button className="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="submit"
                                disabled={email === '' || password === ''}>
                                Sign In
                            </button>
                            
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <p className="text-center text-gray-500 text-xs mt-3">Don't have an account?
                            <a href="/signup" className="ml-2">Sign up now!</a> 
                        </p>
                </form>
            </div>
        </div>
    )
} 

export async function getServerSideProps(context) {
    const hasError = !!context.query.error;
    return {
      props: {
        hasError
      }
    }
}

