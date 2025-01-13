import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Menu() {
    const [hidden, setHidden] = useState(false)
    let lastScrollY = 0
    const location = useLocation()

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

    const isActive = (path) => location.pathname === path ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-black'


    return (

        <div
            className={`fixed z-50 w-full h-[60px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] flex justify-between items-center px-[60px] transition-all duration-300 ${hidden ? '-top-[60px]' : 'top-0'}`}
        >

            <div className='flex justify-center items-center gap-[10px]'>
                <div className='w-[50px] h-[50px] bg-black rounded-full overflow-hidden'>
                    <img 
                        src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/467765766_8589795401069339_922300295553522725_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtiwc0n1wifyedTY_3aRwJCLRl1-VhNH0ItGXX5WE0fU7m2THmqdxxbicuFic5vYJD1YzMMhIPX9TfBkupM6hr&_nc_ohc=hbFcSLL1zj0Q7kNvgHtl7z8&_nc_oc=AdhkGKZNqzsCL-Ma36nTqDP--H4Wq9Z8pMiz8W3d4f5mwXeUzEkWNl7jhOkAPkuD8yyFrjBaiEv9RcR_A3QMLpkZ&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=AaaYonVlzJ5-rntFkISMgrJ&oh=00_AYBqkzA7I9HgybB7Y8K7bY3I_1Ny_s0E6Zl_0AoVGV5z1g&oe=678788AE" 
                        alt="profile" 
                        className='w-full h-full object-cover'
                    />
                </div>
                <h3 className="text-black text-md font-jura font-bold">IVÁN S. CARRILLO</h3> 
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <h3 className="text-black text-md font-jura font-extrabold"> WEB DEVELOPER & 3D ARTIST </h3>
            </div>

            <div className='flex justify-center items-center gap-[20px]'>
                <a href="/" className={`text-xl font-jura font-bold ${isActive('/')}`}>INICIO</a>
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <a href="/dev" className={`text-xl font-jura font-bold ${isActive('/dev')}`}>DESARROLLOS</a>
                <h3 className="text-black text-xl font-jura font-bold"> | </h3>
                <a href="/models" className={`text-xl font-jura font-bold ${isActive('/models')}`}>ARTE 3D</a>
            </div>
            
        </div>

    )

}