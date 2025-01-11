import EmblaCarousel from './HomeCarrouselTwo';

export default function ModelHome () {
    const slides = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyTCR5lmcKbk5Nlo76-WsazaBND7F4PpaDA&s",
            name: "ASTRONAUTA"
        },
        {
            img: "https://www.vanas.ca/images/blog/master-3d-modeling-vanas.webp",
            name: "BUSTO"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVDoJwtUA2jicLGXquD4gFOkBXZPjNj_NVA&s",
            name: "CUIDAD"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzASzxiaZyVh3DFzuMEwNwCrLliHMbkNTdA&s",
            name: "FLOR"
        },
    ];

    return(

        <div 
            className="w-full min-h-[100vh] bg-[#3d3d3d] p-[20px] md:p-[70px] relative"
        >
            
            <div className="z-10 relative bottom-0 text-center md:text-left mt-[50px] w-full flex justify-between items-center">
                <h2 className="text-yellow-500 text-[40px] md:text-[60px] mb-14 font-bebas w-full ">Top, ultimos Modelos</h2>
                <button className='text-yellow-500 w-[300px]'>VER TODOS</button>
            </div>

            <div>
                <EmblaCarousel slides={slides} />
            </div>

        </div>

    )

}