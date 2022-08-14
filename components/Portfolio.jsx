import React from 'react'
import Image from 'next/image'
import Img1 from '../public/img/image_1.jpg'
import Img2 from '../public/img/image_2.jpg'
import Img3 from '../public/img/image_3.jpg'
import Img4 from '../public/img/image_4.jpg'
import Img5 from '../public/img/igImage_5.jpg'

function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                    src={Img1}
                    alt='image'
                    layout='responsive'
                    width='677'
                    height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image
                    src={Img2}
                    alt='image'
                    layout='responsive'
                    width='215'
                    height='217'
                    objectFit='cover'
                /> 
            </div>
            <div className='w-full h-full'>
                <Image
                    src={Img3}
                    alt='image'
                    layout='responsive'
                    width='215'
                    height='217'
                    objectFit='cover'
                /> 
            </div>
            <div className='w-full h-full'>
                <Image
                    src={Img4}
                    alt='image'
                    layout='responsive'
                    width='215'
                    height='217'
                    objectFit='cover'
                /> 
            </div>
            <div className='w-full h-full'>
                <Image
                    src={Img5}
                    alt='image'
                    layout='responsive'
                    width='215'
                    height='217'
                    objectFit='cover'
                /> 
            </div>
        </div>
    </div>
  )
}

export default Portfolio