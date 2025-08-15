'use client';

import gsap from "gsap";

import { useRef, useEffect } from 'react';

export default function BacgroundAnimate (){
    const boxref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(boxref.current, {
            backgroundPosition : '1000px 1000px ',
            ease : 'sine',
            duration : 20,
            repeat : -1
        })
        
    },[])
    
    return (    
        <div 
        ref={boxref}
        className="
        absolute inset-0 z-[-1] 
        bg-white 
        bg-[length:250px_250px] 
        bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_2px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_2px,transparent_1px)]
      "/>
        

    )
}