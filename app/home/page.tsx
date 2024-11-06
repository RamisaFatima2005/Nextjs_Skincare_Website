'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function Home() {
    const route = useRouter()
    return (
        <div className='bg-gradient-to-r from-slate-200 via-slate-300 to-gray-400 w-auto h-auto'>
            <div>
                    <Image src={'/logo.webp'} alt='logo' width={100} height={100} className='h-36 w-36 p-6 rounded-full'/>
                </div>
            <div className='pt-20 pl-28 pb-24'>
            <b><i><h1>Welcome to Radiant Skin</h1></i></b>
            <br/>
            <p className='font-light'>Your journey to natural skincare starts here.</p>
            <br/>
            <button onClick={()=>route.push("/product")} className='font-extrabold bg-neutral-500 rounded-lg h-10 w-28 hover:bg-neutral-400'>Shop Now</button>
            <div className='flex justify-end pr-28 pb-6 -mt-44'>
                <Image src={'/homepage.PNG'} alt='homepage picture' width={150} height={150} className='w-48 h-48 rounded-lg'/>
            </div>
            </div>
        </div>
    );
}