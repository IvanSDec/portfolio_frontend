import { MdHome } from "react-icons/md"
import { FaLockOpen } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"

export default function Login() {

  return (

    <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center">

      <div className="w-[80%] h-[80%] rounded-xl flex justify-center items-center overflow-hidden shadow-2xl">  

        <div className="w-[40%] h-full bg-gray-200 flex justify-center items-center flex-col gap-20">

          <button
            className="w-full h-full max-w-[300px] max-h-[60px] rounded-[50px] flex justify-center items-center gap-[10px] text-[20px] shadow-xl hover:shadow-none hover:bg-gray-300 transition-all duration-300"
            style={{ 
              border: '2px solid black'
            }}
          >
            <MdHome className="text-[30px]" />
            Back home
          </button>

          <button
            className="w-full h-full max-w-[300px] max-h-[60px] rounded-[50px] flex justify-center items-center gap-[10px] text-[20px] shadow-xl hover:shadow-none hover:bg-gray-300 transition-all duration-300"
            style={{ 
              border: '2px solid black'
            }}
          >
            <FaLockOpen className="text-[30px]" />
            Open Login
          </button>

          <button
            className="w-full h-full max-w-[300px] max-h-[60px] rounded-[50px] flex justify-center items-center gap-[10px] text-[20px] shadow-xl hover:shadow-none hover:bg-gray-300 transition-all duration-300"
            style={{ 
              border: '2px solid black'
            }}
          >
            <IoIosContact className="text-[30px]" />
            Contact Page
          </button>

        </div>

        <div className="w-[60%] h-full flex justify-center items-center flex-col relative">

          <div
            className="absolute w-full h-full bg-black flex justify-center items-center opacity-[1]"
            style={{ zIndex: '1' }}
          >
            <img
              src="https://wallpapers.com/images/high/dark-mountain-1920-x-1080-wallpaper-yndum713ekbn1v7d.webp"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div 
            className="absolute w-full h-full flex justify-center items-center flex-col "
            style={{
              zIndex: '2',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(7px)',
              WebkitBackdropFilter: 'blur(7px)', 
            }}
          >

            <h1 className="text-[45px] font-light text-black uppercase mb-[80px]">welcome</h1>

            <p className="text-black text-[20px]">User</p>

            <input
              style={{
                width:'100%',
                maxWidth:'200px',
                marginBottom: '20px',
                marginTop: '10px',
                outline: 'none',
                borderBottom: '1px solid black',
                transition: 'all 600ms',
                color:'black',
                fontSize:'14px',
                textAlign:'center'
              }}
              onFocus={(e) => {
                e.target.style.borderBottom = '2.5px solid gray'; 
                e.target.style.maxWidth = '225px'; 
              }}
              onBlur={(e) => {
                e.target.style.borderBottom = '1px solid black'; 
                e.target.style.maxWidth = '200px'; 
              }}
              type="text"
            />

            <p className="text-black text-[20px]">Password</p>

            <input
              style={{
                width:'100%',
                maxWidth:'200px',
                marginBottom: '20px',
                marginTop: '10px',
                outline: 'none',
                borderBottom: '1px solid black',
                transition: 'all 600ms',
                paddingLeft:'10px',
                color:'black',
                fontSize:'14px',
                textAlign:'center'
              }}
              onFocus={(e) => {
                e.target.style.borderBottom = '2.5px solid gray'; 
                e.target.style.maxWidth = '225px'; 
              }}
              onBlur={(e) => {
                e.target.style.borderBottom = '1px solid black'; 
                e.target.style.maxWidth = '200px'; 
              }}
              type="password"
            />

            <button 
              className="uppercase text-white mt-[40px] bg-black py-[7px] px-[30px] rounded-[50px]"
              style={{
                border:'1px solid white'
              }}
            >
              Login
            </button>

          </div>

        </div>

      </div>

    </div>

  ) 

}

