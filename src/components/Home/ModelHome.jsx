import { BackgroundGray, TextGolden } from '../Global/Colors'
import LinkHome from './GlobalHome/LinkHome'

export default function ModelHome () {
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzASzxiaZyVh3DFzuMEwNwCrLliHMbkNTdA&s",
    //         name: "FLOR"
    //     }

    return(

        <div 
            className={`w-full min-h-[100vh] h-auto p-[20px] md:p-[70px] relative ${BackgroundGray}`}
        >
            
            <LinkHome
                rute={'/art'}
                title={'Top, modelos'}
                color={TextGolden}
            />

            <div>
                
            </div>

        </div>

    )

}