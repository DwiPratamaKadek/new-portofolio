'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
import Link from "next/link"

import Marquee from "../Animation/Marquee"
import { azeretMono } from "@/app/fonts"

gsap.registerPlugin(ScrollTrigger)

const label = [
    {href : '/', label : 'index,'},
    {href : '/about', label : 'About,'},
    {href : '/contact', label : 'Contanct,'},
    {href : '/project', label : 'Project'},
]


export default function Footer (){

    const textRef = useRef( null )

    useEffect (() => {
        // ----------------------------- Animasi Teks flip ----------------------------- //
        gsap.from(textRef.current, {
            rotationX: 90,
            opacity: 0,
            transformOrigin: "top center",
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger : {
                trigger: textRef.current,
                start: "left center",
                toggleActions : "play none none reverse"
            }
        })
        // ----------------------------- Animasi untuk Index ------------------------- //
        const links = gsap.utils.toArray<HTMLElement>(".footer-link")
        
        
        gsap.from(links,{
            x: -200,
            opacity: 0,
            stagger: 0.5, // animasi berurutan
            duration: 0.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: links[0]?.parentNode as HTMLElement, // trigger dari elemen pertama
                start: "top center",
                toggleActions: "play none none reverse"
            }
        })

    },[])
    return (
        // --------------- FOOTER ---------------
        
        <footer className="h-screen overflow-hidden">  
            {/* Marquee */}
            <div className={`${azeretMono.className} flex flex-col items-center gap-5 `}>
                <h1 ref={textRef} className="text-7xl">What i Use</h1>
                <Marquee />
            </div>
            {/* Href */}
            <div className={`${azeretMono.className} flex flex-col justify-end  min-h-[60%] gap-5 text-7xl  mx-5`}>
            {label.map((items)=> (
                <h1 key={items.href}>
                    <Link  href={items.href} className="footer-link inline-block text-gray-500 hover:text-black transition-colors duration-300">
                        {items.label}
                    </Link>
                </h1>
            ))}
            </div>
            <div className={` ${azeretMono.className} flex justify-around text-xl text-gray-600 my-24 bg-gray-300 h-full p-3 `}>
                <h3> I Kadek Dwi Pratama </h3>
                <h3> dwipratamaikadek@gmail.com </h3>
                <h3> ka.dwip </h3>
            </div>
        </footer>
    )
}