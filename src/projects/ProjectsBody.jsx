import React, { useState } from 'react'
import './projectsBody.css'
import neonBridge from '../assets/neonBridge.jpg';
import newestLogo from '../assets/newestLogo.png';
import fsecomm from '../assets/fsecomm.jpg';
import restateImg from '../assets/restateImg.jpg';
import evidImg from '../assets/evidImg.jpg';
import analyticsDB from '../assets/analyticsDB.jpg';
import techwritImg from '../assets/techwritImg.jpg'
import { PiHandTap } from 'react-icons/pi';

const ProjectsBody = () => {
  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'FullStack Ecomm Demo',
      description: 'This Fullstack Project demonstrates my skill at building a commercial site with working payment system.',
      link: '',
    },
    {
       id: 2,
      title: 'eReal Estate Demo',
      description: 'Here, I demonstrate the skill of building an interactive real estate site.',
      link: '',
    },
    {
      id: 3,
      title: 'eVideo Site',
      description: 'Here with this clone, I demonstrate my full-stack skills with this interactive Netflix clone.',
      link: '',
    },
    {
      id: 4,
      title: 'Analytics Dashboard Demo',
      description: 'Here, I demonstrate my skill in designing this financial statement with metrics dashboard.',
      link: '',
    },
    {
      id: 5,
      title: 'Technical Writing Demo',
      description: 'Here, I demonstrate my skill at technical writing in laying out the fundamentals of coding syntax & techniques.',
      link: '',
    }
  ]

  return (
    <>
        <div className="imgBg fixed inset-0 w-full h-full bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${neonBridge})`}}>

          {/*Logo placement*/}
          <div className="logo2 flex mt-16 justify-center mb-6">
            <img
            src={newestLogo}
            alt='logo'
            className="logo h-[5rem] w-[5rem] shrink-0 rounded-lg"
            />
          </div>
          {/*Card Container*/}
          <div className="cardBox wrapper rounded-md bg-white/15 backdrop-blur-md py-6 px-2 mx-auto w-full 
          sm:max-w-md md:max-w-md lg:max-w-[65rem] overflow-y-auto max-h-[calc(100vh-10rem)] md:max-h-[14rem] 
          lg:overflow-y-hidden lg:max-h-[calc(100vh-27rem)] xl:max-h-[calc(100vh-18rem)]">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-1">
              <div className="portCard relative bg-white/15 rounded overflow-hidden shadow-lg">
                <img src={fsecomm} alt='' className='w-full h-[12rem] object-cover'/>
                {/*Overlay pop-up*/}
                {openCard === 1 && (
                  <div className='absolute inset-0 z-60 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center 
                  px-6 text-center transition-all duration-300'>
                    <p className='text-purple-600 mt-[-2rem] text-[12px] mb-1'>
                    This FullStack ecommerce site demonstrates my coding skills that consist of an admin panel and payment system.
                    </p>
                    <a href='https://reactfs-frontend.vercel.app'>
                      <button className='px-5 py-1 mt-[-2rem] w-full rounded bg-gradient-to-l from-purple-950 to-pink-400 text-white hover:opacity-90
                      border border-white text-[12px]'>
                      View project
                      </button>
                    </a>
                  </div>
                )}
                {/*Button function*/}
                <button onClick={()=> setOpenCard(openCard === 1 ? null : 1)}
                className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b 
                bg-gradient-to-l from-purple-950 to-pink-400 hover:opacity-90 text-white py-2 text-sm
                 font-semibold cursor-pointer border border-white'>                
                FullStack Ecomm Demo
                <PiHandTap/>
                </button>
              </div>
                {/*Card #2*/}
            <div className="portCard relative bg-white/15 rounded overflow-hidden shadow">
                <img src={restateImg} alt='estateImg' className='w-full h-[12rem] object-cover'/>
                {/*Overlay pop-up*/}
                {openCard === 2 && (
                  <div className='absolute inset-0 z-60 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center 
                  px-6 text-center transition-all duration-300'>
                    <p className='text-purple-600 mt-[-2rem] text-[12px] mb-1'>
                    Here, I demonstrate the skill of building an interactive real estate site.
                    </p>
                    <a href='https://e-realestate-demo.vercel.app'>
                      <button className='px-5 py-1 mt-[-2rem] w-full rounded bg-gradient-to-l from-purple-950 to-pink-400 text-white hover:opacity-90
                      border border-white text-[12px]'>
                      View project
                      </button>
                    </a>
                  </div>
                )}
                {/*Button function*/}
                <button onClick={()=> setOpenCard(openCard === 2 ? null : 2)}
                className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b 
                bg-gradient-to-l from-purple-950 to-pink-400 hover:opacity-90 text-white py-2 text-sm
                font-semibold cursor-pointer border border-white'>
                eReal Estate Demo
                <PiHandTap/>
                </button>
            </div>

            {/*Card #3*/} 
            <div className="portCard relative bg-white/15 rounded overflow-hidden shadow-lg h-[12rem]">
                <img src={evidImg} alt='evid' className='w-full h-full object-cover'/>
                {/*Overlay pop-up*/}
                {openCard === 3 && (
                  <div className='absolute inset-0 z-60 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center 
                  px-6 text-center transition-all duration-300'>
                    <p className='text-purple-600 mt-[-2rem] text-[12px] mb-1'>
                    Here with this clone, I demonstrate my full-stack skills with this interactive Netflix clone.
                    </p>
                    <a href='https://e-video-demo.vercel.app'>
                      <button className='px-5 py-1 mt-[-2rem] w-full rounded bg-gradient-to-l from-purple-950 to-pink-400 text-white hover:opacity-90
                      border border-white text-[12px]'>
                      View project
                      </button>
                    </a>
                  </div>
                )}
                {/*Button function*/}
                <button onClick={()=> setOpenCard(openCard === 3 ? null : 3)}
                className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b 
                bg-gradient-to-l from-purple-950 to-pink-400 hover:opacity-90 text-white py-2 text-sm
                font-semibold cursor-pointer border border-white'>
                eVideo demo
                <PiHandTap/>
                </button>
            </div> </div>
            
            {/*Bottom row*/}
            {/*Card #4*/}
            <div className="cardBox wrapper rounded-md py-6 px-2 mx-auto w-full 
            sm:max-w-md md:max-w-md lg:max-w-[65rem] max-h-[calc(100vh-10rem)] md:max-h-[14rem]
            lg:overflow-y-hidden">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-1">
              <div className="portCard relative bg-white/15 rounded overflow-hidden shadow">
                <img src={analyticsDB} alt='dashboard' className="w-full h-[12rem] object-cover"/>  
                {/*Overlay pop-up*/}
                {openCard ===4 && (
                  <div className='absolute inset-0 z-60 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center 
                  px-6 text-center transition-all duration-300'>
                    <p className='text-purple-600 mt-[-2rem] text-[12px] mb-1'>
                    Here, I demonstrate my skill in designing this consolidated financial statement with metrics dashboard.
                    </p>
                    <a href='https://analyticsdbdemo.vercel.app'>
                      <button className='px-5 py-1 mt-[-2rem] w-full rounded bg-gradient-to-l from-purple-950 to-pink-400 text-white hover:opacity-90
                      border border-white text-[12px]'>
                      View project
                      </button>
                    </a>
                  </div>
                )}  
                {/*Button function*/}
                <button onClick={()=> setOpenCard(openCard === 4 ? null : 4)}
                className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b 
                bg-gradient-to-l from-purple-950 to-pink-400 hover:opacity-90 text-white py-2 text-sm
                font-semibold cursor-pointer border border-white'>
                Analytics Dashboard Demo
                <PiHandTap/>
                </button>          
              </div>

              {/*Card #5*/}
              <div className="portCard relative bg-white/15 rounded overflow-hidden shadow">
                <img src={techwritImg} alt='techwrit' className='w-full h-[12rem] object-cover'/>
                {/*Overlay pop-up*/}
                {openCard === 5 && (
                  <div className='absolute inset-0 z-60 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center 
                  px-6 text-center transition-all duration-300'>
                    <p className='text-purple-600 mt-[-2rem] text-[12px] mb-1'>
                    Here, I demonstrate my skill at technical writing in laying out the fundamentals of coding syntax & techniques.
                    </p>
                    <a href='https://reid-techwrit.vercel.app'>
                      <button className='px-5 py-1 mt-[-2rem] w-full rounded bg-gradient-to-l from-purple-950 to-pink-400 text-white hover:opacity-90
                      border border-white text-[12px]'>
                      View project
                      </button>
                    </a>
                  </div>
                )}
                {/*Button function*/}
                <button onClick={()=> setOpenCard(openCard === 5 ? null : 5)}
                className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b 
                bg-gradient-to-l from-purple-950 to-pink-400 hover:opacity-90 text-white py-2 text-sm
                font-semibold cursor-pointer border border-white'>
                Technical Writing Demo
                <PiHandTap/>
                </button>
              </div>                         
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default ProjectsBody