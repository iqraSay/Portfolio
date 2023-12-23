"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import mc from "@/assets/mcNobg.png";
// import backgroundImage from '../assets/bg.png';




const HeroSection = () => {
  const videoSource = 'bgvid.mp4';

  const toRotate = ["Fullstack Developer", "Software Engineer" , "Web Developer"]
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text,setText] = useState('')
  const [index, setIndex] = useState(1);
  const [delta,setDelta] = useState(10 - Math.random()*1)
  const period = 450

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick()
    },delta)

    return () => {clearInterval(ticker)}
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div 
    // style={{
    //   backgroundImage: `url(${backgroundImage.src})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      
      <main className=" mb-24 px-1 md:px-16" >
        
  <div>
      <section className='relative w-full mx-auto h-screen z-0'>
        <div className={` absolute inset-0 top-[80px] max-w-7xl mx-auto` }>
          <div className='flex flex-col md:flex-row md:mt-5 w-full justify-between'>
            <div className=' max-w-3xl md:w-50p items-center justify-center block '>
              <h1 className='text-5xl text-center md:text-7xl mt-24 py-4'>{`👋 I'm Shabeeh Fatima `}
                <br />
              </h1>
              <div className='wrap text-center font-bold text-4xl my-10 md:text-7xl'> <span className='br22 text-center text-transparent bg-gradient-to-r from-lime-500 to-cyan-400 bg-clip-text'>{text}</span> </div>
              <div className='wrap text-center items-center justify-center flex'>
           <a href="https://drive.google.com/file/d/1AoOjCp5BM1JiQMiZt9Dci/otAfTBeCBmT/view?usp=drive_link" className="bg-cyan-400 font-bold text-xl z-50 hover:text-white text-black px-4 py-2 rounded-lg shadow-md transition-all duration-200  md:sm-96 hover:bg-fuchsia-600" target="_blank" id='drbtn'>Download Resume</a></div>
            </div>
            <div className='mt-10 md:mt-24 pt-1  md:w-50p w-screen flex items-center justify-center'>
            <Image src={mc} className='scale-100' alt="banner" id="imgg"/>
            </div>
          </div>
        </div>
      </section>
    </div>
           <h2 className="text-4xl font-bold text-white mb-4 w-100p">
        </h2>
      </main>
      
      
    </div>
  );
};

export default HeroSection;
