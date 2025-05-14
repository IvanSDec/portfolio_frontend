import { BackgroundGray } from "../Global/Colors";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer () {
    
    return(

        <footer className={` text-white text-center p-6 ${BackgroundGray}`}>

            <div className="container mx-auto">
                
                <p className="text-lg font-semibold">© 2025 Iván Sánchez — Desarrollo y Modelado</p>
                
                <div className="flex justify-center gap-4 mt-3">

                    <Link 
                        to={'https://www.instagram.com/ivanscarrillomx/'}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-white text-2xl" />
                    </Link>

                    <Link 
                        to={'https://www.facebook.com/profile.php?id=100001168921982'}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <CiFacebook className="text-white text-2xl" />
                    </Link>

                    <Link 
                        to={'https://x.com/IvnSnch64591889'}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaSquareXTwitter className="text-white text-2xl" />
                    </Link>
                    
                </div>
                
                <p className="mt-3 text-sm opacity-70">Construyendo soluciones con tecnología y eficiencia.</p>

            </div>

        </footer>

    );

};