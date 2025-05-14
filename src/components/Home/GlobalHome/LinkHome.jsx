import { Link } from 'react-router-dom'

export default function LinkHome ({ rute, title, color }) {

    return(

        <div className="w-full z-10 relative bottom-0 text-center md:text-left mt-2 md:mt-[50px] flex justify-center md:justify-between items-center flex-wrap">
            <h2 className={`${color} text-[40px] md:text-[60px] mb-1 md:mb-14 font-bebas w-1/2 min-w-[300px]`}>{title}</h2>
            <Link to={`${rute}`} className='w-1/2'>
                <div className={`${color} flex justify-center md:justify-end items-center text-xl w-full`}>VER TODOS</div>
            </Link>
        </div>

    );

};