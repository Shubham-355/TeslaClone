import { useState } from "react"

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className="flex flex-col items-center justify-between min-h-screen big-white pt-24 px-24 pb-3">
            <div className="w-1/4">
                <div className="flex text-3xl/[5px] font-montserrat font-semibold text-center mb-14">Sign In</div>
                <div className="flex flex-col mb-8">
                    <div className="flex">
                        <div className="text-sm font-semibold mb-2 text-[#5c5e62]">Email</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 m-[4.8px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </div>
                    <input type="email" className="bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-1 ring-gray-300 transition duration-500" value={email} onChange={handleEmailChange}></input>
                </div>
                <button className={`w-full py-2.5 rounded-md mb-6 transition duration-300 text-sm font-semibold ${
                    email ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-400 text-white cursor-not-allowed'
                }`} disabled={!email}>Next</button>
                <div className="text-center mb-6">
                    <div className="text-sm tracking-wider text-gray-700 underline cursor-pointer underline-offset-4 hover:text-black hover:decoration-[1.5px]">Trouble Signing In?</div>
                </div>
                <div className="flex items-center p-4 mb-8">
                    <div className="flex-grow border-t border-[1.5px] border-gray-300"></div>
                    <div className="mx-2 text-sm font-semibold text-gray-500">Or</div>
                    <div className="flex-grow border-t border-[1.5px] border-gray-300"></div>
                </div>
                <div className="">
                    <button className="w-full text-sm font-semibold bg-gray-100 text-gray-700 font-montserrat py-3 rounded-md hover:bg-gray-200 transition duration-300">Create Account</button>
                </div>
            </div>
            <div className="flex space-x-4 text-xs text-gray-700">
                <div className="cursor-pointer font-semibold hover:text-black hover:underline decoration-[1.5px] underline-offset-4">Tesla © 2024</div>
                <div className="cursor-pointer font-semibold hover:text-black hover:underline decoration-[1.5px] underline-offset-4">Privacy & Legal</div>
                <div className="cursor-pointer font-semibold hover:text-black hover:underline decoration-[1.5px] underline-offset-4">Contact</div>
            </div>
        </div>
        
    )
}

export default SigninPage