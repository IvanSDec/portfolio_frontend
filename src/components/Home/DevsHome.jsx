import React, { useEffect } from 'react';
import LinkHome from './GlobalHome/LinkHome';
import { TextWhite } from '../Global/Colors';
import Blackout from './GlobalHome/Blackout';

export default function DevsHome () {   

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const secundary_banner = document.getElementById('secundary_banner');
            secundary_banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(

        <div 
            id="secundary_banner" 
            className="relative w-full min-h-[100vh] p-10 h-auto" 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >

            <Blackout />

            <LinkHome
                rute={'/devs'}
                title={'Top, desarrollos'}
                color={TextWhite}
            />

            <div>
                
            </div>
                      
        </div>

    );

};