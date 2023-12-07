"use client"
import React from 'react'
import { Zoom } from 'react-slideshow-image'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import 'react-slideshow-image/dist/styles.css'

const ImageGallery = () => {
    const images = ['/images/WallpaperImages/IMG_8700.JPG', '/images/WallpaperImages/IMG_0011.JPG', '/images/WallpaperImages/IMG_0213.JPG', '/images/WallpaperImages/IMG_0275.JPG', '/images/WallpaperImages/IMG_4750 2.JPG', '/images/WallpaperImages/IMG_8563.JPG', '/images/WallpaperImages/IMG_7627.jpeg', '/images/WallpaperImages/IMG_0161.jpeg', '/images/WallpaperImages/IMG_0252 2.JPG', '/images/WallpaperImages/IMG_4685 2.JPG', '/images/WallpaperImages/IMG_8594.JPG', '/images/WallpaperImages/IMG_9932.jpeg', '/images/WallpaperImages/IMG_0055.JPG', '/images/WallpaperImages/IMG_8019.JPG', '/images/WallpaperImages/IMG_7633.jpeg', '/images/WallpaperImages/IMG_8541.JPG', '/images/WallpaperImages/IMG_0040.JPG', '/images/WallpaperImages/IMG_8284.JPG', '/images/WallpaperImages/IMG_9995.JPG', '/images/WallpaperImages/IMG_0063 2.JPG', '/images/WallpaperImages/IMG_4751 2.jpeg', '/images/WallpaperImages/IMG_4786 2.JPG', '/images/WallpaperImages/IMG_9915.jpeg', '/images/WallpaperImages/IMG_9997.JPG']
    const zoomInProperties = {
        scale: 1,
        duration:1000, // how long to wait before changing images
        transitionDuration:300, // transition time per image
        Infinity:true, // loop to infinity
        prevArrow: (
            <div className='ml-10 top-40 md:top-72'>
                <ArrowLeftIcon className='h-8 w-8 text-white cursor-pointer'/>
            </div>
        ),

        nextArrow: (
            <div className='mr-10 top-40 md:top-72'>
                <ArrowRightIcon className='h-8 w-8 text-white cursor-pointer'/>
            </div>
        )

        // icons
    }
    return (
<section id='gallery'>
    <div className='w-full h-screen'>
        <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
                <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative'>
                    <img className='w-screen h-screen object-cover'
                        src={each}
                    />
                </div>
            ))}
        </Zoom>
    </div>
</section>
    )
}

export default ImageGallery