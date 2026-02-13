import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page404() {
  return ( 
  <div className="min-h-screen bg-white flex flex-col"> 
    <Navbar /> 
        <div className="flex-1 flex flex-col items-center justify-center"> 
            <img 
                src="/Error.svg" 
                alt="Project not found" 
                className="mx-auto mb-4 w-80 h-55 object-contain" 
            /> 
        <div className="text-center"> 
        <Link to="/" className="flex text-center items-center gap-1.5 text-blue-800 hover:underline py-6">
            <ArrowLeft size={16} /> 
         Back to Home 
        </Link> 
        </div> 

     </div> 
     <Footer /> 
    </div>
    );
}
