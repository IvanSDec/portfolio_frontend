import React, { useEffect } from 'react'
import LinkHome from './GlobalHome/LinkHome'
import { TextWhite } from '../Global/Colors'
import Blackout from './GlobalHome/Blackout'

export default function AnimationsHome () {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const last_banner = document.getElementById('last_banner')
            last_banner.style.backgroundPosition = `center ${scrollY * 0.6}px`
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(

        <div 
            id="last_banner" 
            className="relative w-full min-h-[100vh] h-auto p-10" 
            style={{ 
                backgroundImage: "url('https://imgs.search.brave.com/ousULh3f_UEr6_VWg9AYPq2RLxgPGyQ8y-OJ9GtF60w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25i/bGVuZGVyLmVzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/LzE2NjQ5OTQzMzJf/NjQyX1ByaW1lcm9z/LXBhc29zLWNvbi1s/YS1hbmltYWNpb24t/M0QtZW4tQmxlbmRl/ci5qcGc')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >

            <Blackout />

            <LinkHome
                rute={'/art'}
                title={'Top, animaciones'}
                color={TextWhite}
            />

            <div>
                
            </div>

        </div>

    )

}