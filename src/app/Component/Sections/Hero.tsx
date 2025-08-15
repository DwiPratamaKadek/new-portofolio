"use client";

import { azeretMono } from "@/app/fonts";
import BacgroundAnimate from "../Animation/BackgroundAnimate";

import gsap from "gsap";
import { useRef, useEffect } from "react";

import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin)



export default function Hero() {
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const text3Ref = useRef(null)
    const lineRef = useRef(null)


    useEffect(() => {
        const tl = gsap.timeline()
        
        tl.to(text1Ref.current, {
            x : -50,
            delay : 0.2,
            duration : 1.5,
            text : "Helo, !",
            ease : "back.inOut"
        })

        tl.to(text2Ref.current, {
            x : 50,
            delay : 0.2,
            duration : 1.5,
            text : "I’am Dwi",
            ease : "back.inOut"
        }, "-=0.4") //Memberikan jeda pada animasi

        tl.to(text3Ref.current, {
            opacity : 1,
            y : 20,
            delay : 0.5,
            duration : 1,
            ease : "sine.inOut"
        },"text3")
        tl.fromTo(lineRef.current,
            {width : 0, opacity : 0,},
            {width : "100%", opacity : 1, duration : 1, ease : "back.inOut"},
            "text3"
        )
    }, [])
    return (
        <div>
            {/* Bacground */}
            <div className="absolute inset-0 z-[-1]"> 
                <BacgroundAnimate/>
            </div>

            <section className="flex justify-center items-center h-screen ">
                <div className={`${azeretMono.className} relative z-10`}>
                    <h1 ref={text1Ref} className="text-9xl"></h1>
                    <h1 ref={text2Ref} className="text-9xl"></h1>
                    <div ref={lineRef} className="bg-gray-700 rounded-xl h-3 mt-10" />
                    <p ref={text3Ref} className="text-gray-500 font-thin max-w-md opacity-0 mt-5 hover:scale-200 hover:font-black transition-colors duration-300 ">
                        I build how things look and feel — from rough sketches to websites
                        that actually work.
                    </p>
                </div>
            </section>
            
        </div>
    );
}
