import Image from 'next/image';
import React from 'react';

const Products = () => {
    return (
        <div className='bg-gradient-to-r from-slate-200 via-slate-300 to-gray-400 w-auto h-auto'>
            <div className='flex justify-center pt-10'>
                <b><i><h2>Our Skincare Collection</h2></i></b>
                <br />
            </div>

            <div className="flex justify-between px-14 pt-14">
                <div className="flex flex-col space-y-14">
                    <div>
                        <button><b><h1>Hyaluronic Acid Face Serum</h1></b></button>
                        <Image src="/hyaluronicSerum.webp" alt="Hyaluronic Acid Face Serum" width={150} height={150} className='pl-8'/>
                    </div>
                    <div>
                        <button><b><h1>Revitalizing Night Cream</h1></b></button>
                        <Image src="/NightCream.webp" alt="Revitalizing Night Cream" width={150} height={150} className='pl-8'/>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div>
                    <button><b><h1>Soothing Face Cleanser</h1></b></button>
                        <Image src="/Cleaanser.webp" alt="Soothing Face Cleanser" width={150} height={150} className='pl-6'/>
                    </div>
                </div>

                <div className="flex flex-col space-y-14">
                    <div>
                    <button><b><h1>Micellar Water</h1></b></button>
                        <Image src="/MicellarWater.jpg" alt="Micellar Water" width={150} height={150} className='pr-10'/>
                    </div>
                    <div>
                    <button><b><h1>Gel Moisturizer</h1></b></button>
                        <Image src="/gelMoisturizer.webp" alt="Gel Moisturizer" width={150} height={150} className='pr-10'/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default Products;
