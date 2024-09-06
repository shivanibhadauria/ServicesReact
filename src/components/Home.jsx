import { Link } from "react-router-dom"


export default function Home(){
    return(<>
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 ">
       <Link to="/services" > <div className="font-extrabold  text-5xl border-4 p-8 m-8 text-white rounded-lg hover:scale-125 cursor-pointer ">Services</div></Link>
    </div>

    
    </>)
}