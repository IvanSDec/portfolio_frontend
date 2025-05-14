import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextGolden, TextWhite, BorderGolden, BackgroundGoldenLigth } from '../Global/Colors';
import Blackout from './GlobalHome/Blackout';

export default function BannerHome() {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const banner = document.getElementById('banner');
            banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        };
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

            <Blackout />

            <div className="z-10 relative bottom-0 text-center md:text-left mt-[50px] w-full">
                <h1 className={`${TextWhite} md:text-[80px] font-bebas text-[50px] mt-[10px] w-full`}>{`DESARROLLADOR & DISEÑADOR`}</h1>
                <h1 className={`${TextWhite} md:text-[80px] font-bebas text-[50px] mt-[10px] w-full`}>{`WEB`}</h1>
            </div>

            <div className='relative transform md:absolute md:bottom-[200px] md:right-[250px] w-full md:w-fit flex justify-center items-center'>
                <Link to='/cv'>
                    <div class={`${TextGolden} ${BorderGolden} ${BackgroundGoldenLigth} text-center mt-[200px] md:mt-0 text-lg md:text-2xl border-2 border-solid w-fit rounded-xl px-7 py-2`}>
                        ¡ Descarga mi CV !
                    </div>
                </Link>
            </div>

        </div>

    );

};