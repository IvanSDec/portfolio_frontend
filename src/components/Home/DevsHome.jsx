import React, { useEffect } from 'react';
import EmblaCarouselParallax from './CarrouselHome';

export default function DevsHome () {   
    const slides = [
        {
            img: "https://chat-gpt-mexico.mx/wp-content/uploads/2024/01/Creacion-de-imagenes-de-arte-generadas-por-IA.jpg",
            name: "Sero Web"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPvDW8gBfklrVaTSSY2hp6mRtTOqMrKKYWg&s",
            name: "Licorne"
        },
        {
            img: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
            name: "Aurio"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__Ksi_cPcPu2mXlGsA5Y4Jl2T_iEJNb7TFw&s",
            name: "Albya"
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const secundary_banner = document.getElementById('secundary_banner');
            secundary_banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(

        <div 
            id="secundary_banner" 
            className="relative w-full min-h-[100vh] p-10" 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='absolute w-full h-full top-0 left-0 opacity-[0.5] bg-black'></div>

            <div className="z-10 relative bottom-0 text-center md:text-left mt-[50px] w-full flex justify-between items-center">
                <h1 className="text-white md:text-[70px] font-bebas text-[50px] mt-[10px] w-full">{`Top, ultimos Desarrollos Web`}</h1>
                <button className='text-white w-[300px]'>VER TODOS</button>
            </div>

            <div>
                <EmblaCarouselParallax slides={slides} />
            </div>
                      
        </div>

    )

}