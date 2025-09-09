import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function Footer () {
    return(
        <footer className={`text-white text-center p-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative z-10 border-t-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm`}>
          
            <div className="container mx-auto">
              
                <p className="text-lg font-semibold font-sans text-cyan-100 drop-shadow-sm">© 2025 Iván Sánchez — Desarrollo y Modelado</p>
            
                <div className="flex justify-center gap-6 mt-4">
                    <Link 
                        to={'https://www.instagram.com/ivanscarrillomx/'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative group transition-all duration-300 hover:scale-110 p-3 rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <FaInstagram className="relative text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 drop-shadow-lg" />
                    </Link>

                    <Link 
                        to={'https://www.facebook.com/profile.php?id=100001168921982'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative group transition-all duration-300 hover:scale-110 p-3 rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <CiFacebook className="relative text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 drop-shadow-lg" />
                    </Link>

                    <Link 
                        to={'https://www.linkedin.com/in/iv%C3%A1n-s-carrillo-a92663322/'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative group transition-all duration-300 hover:scale-110 p-3 rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <CiLinkedin className="relative text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 drop-shadow-lg" />
                    </Link>
                </div>

                <p className="mt-4 text-sm opacity-70 font-sans text-cyan-200/80 drop-shadow-sm">Construyendo soluciones con tecnología y eficiencia.</p>
            
            </div>

        </footer>

    );

};