'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"


import { azeretMono } from "../fonts"

// export async function getStaticProps() {
//     const dir = path.join(process.cwd(), 'public/images/photos')
//     const filenames = fs.readdirSync(dir)

//     const images = filenames.map((name) => ({
//         src: `/images/photos/${name}`,
//     }))

//     return {
//         props: {
//         images,
//         },
//     }
// }

const linkProject = [
    {
        file : '/images/p1.png', 
        link : 'https://note-shop-dwi-pratamas-projects.vercel.app/', 
        desc : 'Aplikasi untuk membuat sebuah catatan belanja yang mempermudahkan pengguna untuk mencatat dan mengelola daftar belanja mereka', 
        title : "Catatan Belanja",
        tool : "react, tailwindcss, javascript ",
        github : "https://github.com/DwiPratamaKadek/catatan-belanja"
    },
    {
        file : '/images/p2.png', 
        link : 'https://weather-map-psi.vercel.app/', 
        desc : 'Weather Map adalah aplikasi web sederhana yang digunakan untuk mengetahui kondisi cuaca terkini di berbagai wilayah di Indonesia secara praktis dan cepat.', 
        title : "Weather Map" ,
        tool : "rect, tailwindcss, typescript, Open Api",
        github : "https://github.com/DwiPratamaKadek/weather-map"
    },
    {
        file : '/images/p3.png', 
        link : 'https://frontend-chatbot-sejarah.vercel.app/', 
        desc : 'Chatbot sejarah Indonesia adalah aplikasi yang memberikan informasi sejarah secara interaktif dan mudah dipahami. Teknologi ini membantu pengguna belajar tentang tokoh, peristiwa, dan kerajaan Indonesia dengan lebih menarik.', 
        title : "Chat Bot Sejarah" ,
        tool : "react, tailwindcss, typescript, Open Api Gemini, python",
        github: "https://github.com/DwiPratamaKadek/beckend-chatbot-sejarah"

    },
    
]

gsap.registerPlugin(ScrollTrigger)

export default function ProjectSections() {
    
    const containerRef = useRef(null)
    const position = useRef(0) // untuk menyimpan nilai xnya 

    const slidePrev = () => {
        position.current = Math.min(position.current + 400, 0)
        gsap.to(containerRef.current, {
            x : position.current,
            duration : 0.5,
            ease : "power2.inOut"
        })
    }

    const slideNext = () => {
        position.current = position.current - 400
        gsap.to(containerRef.current, {
            x : position.current,
            duration : 0.5,
            ease : "power3.inOut" 
        })
    }

    useEffect (() => {
        const textRef = gsap.utils.toArray(".textRef")

        gsap.from(textRef, {
            rotationX: 90,
            opacity: 0,
            stagger : 0.5,
            transformOrigin: "top center",
            duration: 0.8,
            ease: "back.out(1.7)"
        })
        
        gsap.from(containerRef.current, {
            y : 100,
            opacity : 0,
            duration : 1,
            ease : " power2.inOut",
        })
    },[])

    
    return (
        <>
            <div className={`${azeretMono.className} flex flex-col justify-center h-screen mx-10 gap-10 `}>
                    <div className="text-7xl">
                        <h1 className="textRef"> MY </h1>
                        <h1 className="textRef"> Blog. </h1>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div ref={ containerRef } className="flex gap-5 ">
                            {linkProject.map((img,i) =>(
                                <div  key={i} className="p-3 min-w-[400px] h-auto rounded-xl border-2 border-gray-200  ">
                                    <div className="flex flex-col gap-3 p-3">
                                        <h1 className="text-3xl">{img.title}</h1>
                                        <Image src={img.file} width={300} height={300} alt={img.title}/>
                                        <p className="text-sm">{img.desc}</p>
                                        <p className="text-sm">{img.tool}</p>
                                        <div className="flex justify-end gap-5 my-5 text-white ">
                                            <Link href={img.link} className="bg-amber-500 rounded-md p-3 hover:text-black hover:bg-white transition-colors duration-300">go to side</Link>
                                            <Link href={img.github} className="bg-blue-500 rounded-md p-3 hover:text-black hover:bg-white transition-colors duration-300">see on gitHub</Link>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                    {/* Next and Prev */}
                    <div className="flex justify-end gap-5 my-10">
                        <button
                            onClick={slidePrev}
                            className=" bg-gray-700 text-white px-3 py-2 rounded-full"
                        >
                            <Icon icon="ph:arrow-left-bold"/>
                        </button>

                         <button
                            onClick={slideNext}
                            className=" bg-gray-700 text-white px-3 py-2 rounded-full"
                            >
                                <Icon icon="ph:arrow-right-bold"/>
                        </button>
                    </div>
            </div>
        </>
    )
}