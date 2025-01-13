import EmblaCarouselTwo from './CarrouselThreeHome';
import React, { useEffect } from 'react';

export default function AnimationsHome () {

    const slides = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyTCR5lmcKbk5Nlo76-WsazaBND7F4PpaDA&s",
            name: "PRACTICA"
        },
        {
            img: "https://www.vanas.ca/images/blog/master-3d-modeling-vanas.webp",
            name: "JUEGOS"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVDoJwtUA2jicLGXquD4gFOkBXZPjNj_NVA&s",
            name: "NUEVA"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzASzxiaZyVh3DFzuMEwNwCrLliHMbkNTdA&s",
            name: "PRUEBA"
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const last_banner = document.getElementById('last_banner');
            last_banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(

        <div 
            id="last_banner" 
            className="relative w-full min-h-[100vh] p-10" 
            style={{ 
                backgroundImage: "url('https://imgs.search.brave.com/ousULh3f_UEr6_VWg9AYPq2RLxgPGyQ8y-OJ9GtF60w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25i/bGVuZGVyLmVzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/LzE2NjQ5OTQzMzJf/NjQyX1ByaW1lcm9z/LXBhc29zLWNvbi1s/YS1hbmltYWNpb24t/M0QtZW4tQmxlbmRl/ci5qcGc')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='absolute w-full h-full top-0 left-0 opacity-[0.5] bg-black'></div>
            
            <div className="z-10 relative bottom-0 text-center md:text-left mt-[50px] w-full flex justify-between items-center">
                <h2 className="text-white text-[40px] md:text-[60px] mb-14 font-bebas w-full ">Top, ultimas animaciones</h2>
                <button className='text-white w-[300px]'>VER TODOS</button>
            </div>

            <div>
                <EmblaCarouselTwo slides={slides} />
            </div>

        </div>

    )

}