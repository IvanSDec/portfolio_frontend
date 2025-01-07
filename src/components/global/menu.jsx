import { useState, useEffect } from 'react'

export default function Menu() {
    const [hidden, setHidden] = useState(false)
    let lastScrollY = 0

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setHidden(true)
            } else {
                setHidden(false);
            }
            lastScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        
    }, [])

    return (

        <div
            className={`fixed z-50 w-full h-[60px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] flex justify-between items-center px-[60px] transition-all duration-300 ${hidden ? '-top-[60px]' : 'top-0'}`}
        >

            <div className='flex justify-center items-center gap-[10px]'>
                <h3 className="text-black text-md font-jura font-bold">Iván S. Carrillo</h3> 
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <h3 className="text-black text-md font-jura font-extrabold"> DEVELOPER & 3D ARTIST </h3>
            </div>

            <div className='flex justify-center items-center gap-[20px]'>
                <a href="/" className='text-black text-xl font-jura font-bold'>INICIO</a>
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <a href="/dev" className='text-black text-xl font-jura font-bold'>DESARROLLOS</a>
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <a href="/models" className='text-black text-xl font-jura font-bold'>MODELADOS</a>
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <a href="/admin" className='text-black text-xl font-jura font-bold'>ADMIN</a>
            </div>

        </div>

    )

}