    'use client';

    import Link from "next/link";
    import { usePathname } from "next/navigation";

    import { robotoMono } from '@/app/fonts'


    const label = [
        {href : '/', label : 'index,'},
        {href : '/about', label : 'About,'},
        {href : '/contact', label : 'Contanct,'},
        {href : '/project', label : 'Project'},
    ]


    export default function Navbar (){
        const pathName = usePathname()

        console.log(pathName)

        return (
            <nav className={`${robotoMono.className} flex justify-around items-center p-4 shadow-sm rounded-b-xl `}>
                {/* Logo */}
                <div>
                    <h1>Ini Logo</h1>
                </div>
                {/* Bagian Routs  */}
                <ul className='flex gap-1   '>
                    {label.map((items) => (
                        <li key={items.label} className={pathName === items.href ? 'text-black' : 'text-gray-400'} >
                            <Link 
                            href={items.href} 
                            className="hover:text-black transition-colors duration-300">
                                {items.label}
                            </Link>
                        </li>
                    ))}
                
                </ul>
            </nav>
        )
    };