'use client';

import { azeretMono } from "@/app/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSection() {
  const horizontalRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const spanRef = useRef(null);
  const line = useRef(null);

  useEffect(() => {
    if (!horizontalRef.current) return;

    const sections = gsap.utils.toArray(".panel"); // Tambahkan class 'panel' ke setiap section agar lebih mudah
    const totalSections = sections.length;

    // ------------------------ Scroll buat Horizontal --------------------------------------
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 0.6,
        snap: 1 / (totalSections - 1),
        end: () => "+=" + horizontalRef.current!.scrollWidth,
        markers: true,
      },
    });

    tl.to(sections, {
      xPercent: -100 * (totalSections - 1),
      ease: "none",
    });
    //--------------------------------- Animasi buat section 1 -------------------------------------

    // Animasi untuk span di Section 1 saat masuk viewport
    gsap.fromTo(
      spanRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          containerAnimation: tl, // Sinkronisasi dengan horizontal scroll!
          start: "left center",
          // end : "right center",
          // scrub : true,
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );
    // line section 1
    // ------------------------------- Animasi buat line di Section 1 -------------------------------------
    gsap.fromTo(line.current, 
      { width : '0%,'},
      { width : '100%', 
        duration : 1, 
        ease : "none",
        scrollTrigger: {
          trigger: section1Ref.current,
          containerAnimation: tl, // Sinkronisasi dengan horizontal scroll!
          start: "left center",
        },
      }
    )
    // line section 2 
    // ------------------------------- Animasi lne di section 2 -------------------------------------
    gsap.fromTo(line.current, 
      { width : '100%'},
      { width : '300%', 
        duration : 1, 
        ease : "none",
        scrollTrigger: {
          trigger: section2Ref.current,
          containerAnimation: tl, // Sinkronisasi dengan horizontal scroll!
          start: "left center",
        },
      }
    )

    // line section 3
    // ------------------------- Animasi line di section 3 --------------------------------------
    gsap.fromTo(line.current, 
      { width : '300%'},
      { width : '500%', 
        duration : 1, 
        ease : "none",
        scrollTrigger: {
          trigger: section3Ref.current,
          containerAnimation: tl, // Sinkronisasi dengan horizontal scroll!
          start: "left center",
        },
      }
    )
    
    
    // -------------------- Animasi untuk section 2 --------------------------------
    const spansSection2 = section2Ref.current.querySelectorAll(".span")

    if (spansSection2.length > 0) {
      const tlSection2 = gsap.timeline({
        scrollTrigger : {
          trigger: section2Ref.current,
          containerAnimation : tl,
          start: "left center",
          toggleActions : "play none none reverse"
        }
      })
      // -----Span ke 1 slide_dari_kiri-----------
      tlSection2.from(spansSection2[0], {
          x: -200,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
      })
      // ----- Span ke 2 flip-------------
      if(spansSection2[1]) {
        tlSection2.from(spansSection2[1], {
            rotationX: 90,
            opacity: 0,
            transformOrigin: "top center",
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.4") // memulai lebih lambat
      }
       // ------ Span ke 3 dan seterunya ini buat secara dinamis fade + scale --------------
        spansSection2.forEach((span, i ) => {
          if(i >= 2) {
              tlSection2.from(span,{
                y : -100,
                opacity : 0,
                ease: "back.out(1.7)"
              }, "+=0.2")
          }
        })
    }

    // --------------------------------- Animasi pada section 3 ---------------------------------

    const spansSection3 = section3Ref.current.querySelectorAll(".span")

    if (spansSection3.length > 0) {
      const tlSection3 = gsap.timeline({
        scrollTrigger : {
          trigger: section3Ref.current,
          containerAnimation : tl,
          start: "left center",
          toggleActions : "play none none reverse"
        }
      })
      // -----Span ke 1 slide_dari_kiri-----------
      tlSection3.from(spansSection3[0], {
        rotationX: 90,
        opacity: 0,
        transformOrigin: "top center",
        duration: 0.8,
        ease: "back.out(1.7)"
          // x: -200,
          // opacity: 0,
          // duration: 0.8,
          // ease: "power3.out"
      })
      // ----- Span ke 2 flip-------------
      if(spansSection3[1]) {
        tlSection3.from(spansSection3[1], {
           y: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4") // memulai sedikit lebih cepat
      }
       // ------  Span ke 3 dan seterunya ini buat secara dinamis fade + scale --------------
        spansSection3.forEach((span, i ) => {
          if(i >= 2) {
              tlSection3.from(span,{
                opacity: 0,
                scale: 0.5,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
              }, "-=0.4")
          }
        })
    }
   


       

    
    
    // ------------------------------------ Animasi membuat hover menggunakan gsap ---------------------------------------------
       // // Optional: hover effect menggunakan GSAP
    // const spanEl = span5Ref.current;
    // if (spanEl) {
    //   spanEl.addEventListener("mouseenter", () => {
    //     gsap.to(spanEl, { scale: 1.1, color: "#f87171", duration: 0.3 });
    //   });
    //   spanEl.addEventListener("mouseleave", () => {
    //     gsap.to(spanEl, { scale: 1, color: "#000", duration: 0.3 });
    //   });
    // }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div ref={horizontalRef} className="flex w-[400vw] h-screen">
        
        {/* Section 1 */}
        <div
          ref={section1Ref}
          className="panel w-screen h-screen flex items-center justify-center "
        >
          <div className="mx-20">
            <h1 className={`${azeretMono.className} text-7xl leading-snug`}>
              Programming is
              like painting — each
              line of code brings <br/>
              <span ref={spanRef} className="inline-block bg-amber-300 rounded-2xl p-3">
                the canvas to life.
              </span>
              <div ref={line} className="bg-gray-700 rounded-xl h-3 mt-10  " />
            </h1>
          </div>
        </div>

        {/* Section 2 */}
        <div ref={section2Ref}
          className="panel w-screen h-screen flex justify-around items-center " >
          <div className={`${azeretMono.className} relative flex text-7xl gap-25 `}>
              <h1 className="span absolute bg-amber-500 p-3 rounded-xl -mx-7 -my-20 z-10 " >What </h1>
              <h1 className="span  bg-amber-300 p-3 rounded-xl my-2"> i am doing ? </h1>
              <h1 className="span "> I’m a web developer who </h1>

          </div>
        </div>

        {/* Section 3 */}
        <div ref = {section3Ref}
        className="panel w-screen h-screen flex items-center justify-center ">
         
          <div className={`${azeretMono.className} flex  text-7xl gap-5  `} >
                <h1 className="span absolute p-3 bg-gray-400 text-white rounded-2xl z-10 -my-28 -mx-16"> enjoys creating</h1>
              <h1 className="span p-3 bg-amber-400  rounded-2xl "> interactive  </h1>
              <h1 className="span  bg-amber-500 p-3 rounded-3xl text-white"> & </h1>
              <h1 className="span "> engaging websites. </h1>
          </div>
        </div>
      </div>

      {/* <div className="w-screen h-screen ">
          <Footer/>
      </div> */}
    </section>
  );
}
