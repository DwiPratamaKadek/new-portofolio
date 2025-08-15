'use client'

import gsap from "gsap"
import { useEffect, useRef } from "react"

import { azeretMono } from "@/app/fonts" 


export default function Marquee () {

    // ------------------------------------ Ini membuat Marquee jika ada 2 atau lebih kata -----------------------------------------------
     // row 1 
    const row1Ref1 = useRef<HTMLDivElement>(null)
    const row1Ref2= useRef<HTMLDivElement>(null)

    // row 2 
    const row2Ref1 = useRef<HTMLDivElement>(null)
    const row2Ref2 = useRef<HTMLDivElement>(null)

    useEffect (() => {
        const makeMarquee = (
            ref1 : React.RefObject<HTMLDivElement | null>, 
            ref2 : React.RefObject<HTMLDivElement | null>, 
            speed : number 
        ) => {
            let xPercent = 0
            const diraction = -0.1

            const animate = () => {
                if(xPercent <= -100) xPercent = 0
                if(xPercent > 0 ) xPercent = -100

                gsap.set(ref1.current , {xPercent : xPercent})
                gsap.set(ref2.current , {xPercent : xPercent})

                xPercent += speed * diraction
                requestAnimationFrame(animate)
            }
            animate()
        }
        makeMarquee(row1Ref1, row1Ref2, 0.25)
        makeMarquee(row2Ref1, row2Ref2, -0.25)
    },[])
    
    const items = [
        "PHP, ",
        "React, ",
        "JavaScript, ",
        "Next.js, ",
        "Java Script, ",
        "HTML/CSS, ",
        "Tailwind CSS, ",
        "GSAP, ",
        "Type Script, "
    ]
    //------------------------- ini untuk membuat marquee yang bergerak ke kiri hanya 1  -----------------------------

    // const marqueeRef1 = useRef (null)
    // const marqueeRef2 = useRef (null)
    // let xPercent = 0
    // let direction = -0.5

    // useEffect (() => {
        

    //     const animation = () => {
    //         if (xPercent <= -100) {
    //             xPercent = 0
    //         }
    //         if (xPercent > 0) {
    //             xPercent = -100
    //         }

    //         gsap.set(marqueeRef1.current,{xPercent : xPercent})
    //         gsap.set(marqueeRef2.current,{xPercent : xPercent})
    //         xPercent += 0.1 * direction  // kecepatan
    //         requestAnimationFrame(animation)
    //     }
    //     requestAnimationFrame(animation)

    // },[])
    
    return (
        <>
            <div className=" flex flex-col gap-5 overflow-hidden">
                {/* untuk marquee 1 */}
                            <div  className={`${azeretMono.className} flex text-5xl whitespace-nowrap text-gray-500  `}>
                                <div ref={row1Ref1} className="flex gap-4">
                                    {items.map((tech, i) => (
                                        <h1 key={i} className="hover:text-black transfrom transition-all duration-300"> {tech} </h1> 
                                    ))}
                                </div>
                                <div ref={row1Ref2} className="flex gap-4">
                                    {items.map((tech, i) => (
                                        <h1 key={i} className="hover:text-black transfrom transition-all duration-300"> {tech} </h1> 
                                    ))}
                                </div>
                            </div>
                        {/* untuk marquee 2 */}
                            <div  className={`${azeretMono.className} flex text-5xl whitespace-nowrap text-gray-500  `}>
                                <div ref={row2Ref1} className="flex gap-4">
                                    {items.map((tech, i) => (
                                        <h1 key={i} className="hover:text-black transfrom transition-all duration-300"> {tech} </h1> 
                                    ))}
                                </div>
                                <div ref={row2Ref2} className="flex gap-4">
                                    {items.map((tech, i) => (
                                        <h1 key={i} className="hover:text-black transfrom transition-all duration-300"> {tech} </h1> 
                                    ))}
                                </div>
                            </div>  
                {/* --------------------- untuk membuat marquee yang bergerak ke kiri --------------------- */}
                {/* <div  className={`${azeretMono.className} flex text-5xl whitespace-nowrap text-gray-500  `}>
                                <div ref={marqueeRef1} className="flex gap-4">
                                    {items.map((tech, i) => (
                                        <h1 key={i} className="hover:text-black transfrom transition-colors duration-100"> {tech} </h1> 
                                    ))}
                                </div>
                                <div ref={marqueeRef2} className="flex gap-4">
                                    {items.map((tech, i) => (
                                        <h1 key={i} className="hover:text-black transfrom transition-colors duration-100"> {tech} </h1> 
                                    ))}
                                </div>
                            </div> */}
            </div>
        </>
    )
}