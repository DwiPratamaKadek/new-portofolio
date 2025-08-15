'use client'

import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

import { azeretMono } from '../fonts';
import { useEffect,useRef } from 'react';


const link = [
    {href : 'https://github.com/DwiPratamaKadek', label : 'DwiPratamaKadek', icon : '/icon/github.png', alt : 'github'},
    {href : 'mailto:dwipratamaikadek@gmail.com ', label : 'dwipratamaikadek@gmail.com', icon : '/icon/email.png', alt : 'email'},
    {href : 'https://www.linkedin.com/in/dwi-pratama-923a3b34a/', label : 'Dwi Pratama', icon : '/icon/linkedin.png', alt : 'linkedin'}
]

export default function ContactSection () {
    
    useEffect(() => {
        const linkRef = gsap.utils.toArray(".linkRef")
        //  animasi untuk masuk
        gsap.fromTo(linkRef, 
            {opacity : 0, y: 50},
            {opacity : 1, y: 0, duration : 0.5, stagger : 0.5, ease : "power3.inOut"}
        )
        // animasi untuk hover 
        linkRef.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { scale: 1.1, duration: 0.2, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", ease: "power1.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { scale: 1, duration: 0.2, boxShadow: "0px 0px 0px rgba(0,0,0,0)", ease: "power1.out" });
            });
        })

    },[])
    
    
    return (
        <>
            <div className={` ${azeretMono.className} flex flex-col justify-center h-screen text-8xl mx-10`}>
                <Typewriter 
                    options={{
                        strings :['Let’s Talk', 'Let’s Collaborate', 'Let’s Create', 'Let’s Work Together'],
                        autoStart : true,
                        loop : true
                    }}
                />
                <div className='flex gap-5 my-10'>
                    {link.map((items) => (
                        <a key={items.label} href={items.href} className="linkRef flex items-center gap-2 p-3 rounded-xl" >
                            <Image 
                                src={items.icon} 
                                alt={items.alt}
                                width={ 25 }
                                height={ 25 }
                            />
                            <p className="font-thin text-sm">{items.label}</p>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}
