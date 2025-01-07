import React, { useEffect } from 'react';

export default function BannerHome() {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const banner = document.getElementById('banner');
            banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            id="banner" 
            className="relative w-full min-h-[100vh] p-10" 
            style={{ 
                backgroundImage: "url('https://theartwolf.com/wp-content/uploads/2021/05/Van_Gogh_-_Rhone_-_1920-1080.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='absolute w-full h-full bg-black top-0 left-0 opacity-[0.6]'></div>

            <div className="z-10 relative bottom-0 text-center md:text-left mt-[50px] w-full">
                <h1 className="text-white md:text-[80px] font-bebas text-[40px] mt-[10px] w-full">{`DESARROLLADOR WEB`}</h1>
                <h1 className="text-white md:text-[70px] font-bebas text-[50px] mt-[10px] w-full">{`& ARTISTA 3D`}</h1>
            </div>
        </div>
    );
}