'use client'

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import BacgroundAnimate from "../Component/Animation/BackgroundAnimate";
import { azeretMono, poppins } from "../fonts";

const link = [
    {href : 'https://github.com/DwiPratamaKadek', label : 'DwiPratamaKadek', icon : '/icon/github.png', alt : 'github'},
    {href : 'mailto:dwipratamaikadek@gmail.com ', label : 'dwipratamaikadek@gmail.com', icon : '/icon/email.png', alt : 'email'},
    {href : 'https://www.linkedin.com/in/dwi-pratama-923a3b34a/', label : 'Dwi Pratama', icon : '/icon/linkedin.png', alt : 'linkedin'}
]

export default function AboutSections() {

    const aboutRef = useRef(null)
    const lineRef = useRef(null)
    const linkItems = useRef(null)
    
    useEffect (() => {
        const about = gsap.utils.toArray(".textRef")
        // const links = gsap.utils.toArray(".linkItems")
        const tl = gsap.timeline()

        tl.fromTo(lineRef.current, 
          {height : '0%'},
          {height: '40%'}
        )

        tl.from(about, {
          x: -50,
          opacity : 0,
          stagger : 0.5,
          duration : 0.5,
          ease : "power4.inOut"
        }, '-=0.5')

        tl.from(aboutRef.current, {
          y : -50,
          opacity: 0,
          ease : 'power3.out'
        },'-=0.4')

        tl.from(linkItems.current, {
          x : -50,
          opacity : 0,
          ease : "power4.inOut"
        },'-=0.4')
    })


  return (
    <>
    {/* background */}
      <div className="absolute inset-0 z-[-1]">
        <BacgroundAnimate />
      </div>
      {/* backgorund */}
      <div className="flex items-center h-screen">
        <div className={`${azeretMono.className} flex h-full items-center justify-around gap-5 w-full mx-52  `}>
            <div ref={ lineRef } className=" w-3  bg-gray-400 rounded-full origin-top  " /> 
            <div className={` ${poppins.className} font-normal `}> 
                <h1 className="textRef text-9xl tracking-[35px]">ABO</h1>
                <h1 className="textRef text-9xl tracking-[35px]">UT</h1>
                <h1 className="textRef text-9xl tracking-[35px]">ME.</h1>    
            </div>
            <div className="grid gap-5"  >
                <p ref={aboutRef} className="text-gray-500 max-w-4xl font-thin">i’m a front - end developer currently diving deep into React and UI/UX design. Enjoys turning code int interactive and visually appealing interfaces while continuously learning modern concepts like components, state management, and user friendly design principles, Committed to growing through challenges, refining skills, and contributing to better digital experiences.  </p>
                <div ref={linkItems} className=" flex gap-5">
                    {link.map((items) => (
                        <Link  key={items.label} href={items.href} className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-50 hover:scale-110  transition-all hover:shadow-xl" >
                            <Image 
                                src={items.icon} 
                                alt={items.alt}
                                width={ 25 }
                                height={ 25 }
                            />
                            <p className="font-thin text-sm">{items.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div> 
      </div>
    </>
  );
}
