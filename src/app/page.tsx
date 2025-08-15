'use client';

import Footer from "./Component/Layouts/Footer";
import Hero from "./Component/Sections/Hero";
import HorizontalSection from "./Component/Sections/HorizontalSection";

// const link = [
//         {href : 'https://github.com/DwiPratamaKadek',alt : 'github', src : '/icon/github.png', name: 'DwiPratamaKadek'},
//         {href : 'https://www.linkedin.com/in/dwi-pratama-923a3b34a/',alt : 'Linkd', src : '/icon/linkedin.png', name: 'ka.dwip'},
//         {href : 'mailto:dwipratamaikadek@gmail.com',alt : 'email', src : '/icon/email.png', name: 'dwipratamaikadek@gmail.com'},
//     ]

export default function Home() {

  return (
    <main className=" grid justify-center ">
      <Hero/> 
      <HorizontalSection />
    </main>
  );

}
