import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [hidden, setHidden] = useState(false);
    let lastScrollY = 0;
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => location.pathname === path ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-100 ';

    return (

        <menu
            className={`fixed hidden z-50 w-full h-[60px] bg-[rgba(41,41,41,0.7)] backdrop-blur-[10px] md:flex justify-between items-center px-[60px] transition-all duration-300 ${hidden ? '-top-[60px]' : 'top-0'}`}
        >

            <div className='flex justify-center items-center gap-[10px]'>
                <div className='w-[50px] h-[50px] bg-black rounded-full overflow-hidden'>
                    <img 
                        src="https://3decstore.s3.us-east-2.amazonaws.com/perfil.png" 
                        alt="profile" 
                        className='w-full h-full object-cover'
                    />
                </div>
                <h3 className="text-gray-100 text-md font-jura font-semibold">IVÁN S. CARRILLO</h3> 
                <h3 className="text-gray-100 text-xl font-jura font-semibold"> | </h3>
                <h3 className="text-gray-100 text-md font-jura font-extrabold uppercase"> Funciona bonito o no funciona.</h3>
            </div>

            <div className='flex justify-center items-center gap-[20px]'>

                <Link to='/'>
                    <div className={`text-xl font-jura font-bold ${isActive('/')}`}>INICIO</div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/devs'>
                    <div className={`text-xl font-jura font-bold ${isActive('/devs')}`}>DESARROLLOS</div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/experience'>
                    <div className={`text-xl font-jura font-bold ${isActive('/experience')}`}>EXPERIENCIA</div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/contact'>
                    <div className={`text-xl font-jura font-bold ${isActive('/contact')}`}>CONTACTO</div>
                </Link>

            </div>
            
        </menu>

    );

};