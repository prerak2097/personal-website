"use client"
import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-slideshow-image'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import 'react-slideshow-image/dist/styles.css'

const ImageGallery = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const largeimages = ['/images/GalleryImages/LargeScreen/IMG_8700.JPG', '/images/GalleryImages/LargeScreen/IMG_0011.JPG', '/images/GalleryImages/LargeScreen/IMG_0213.JPG', '/images/GalleryImages/LargeScreen/IMG_0275.JPG', '/images/GalleryImages/LargeScreen/IMG_4750 2.JPG', '/images/GalleryImages/LargeScreen/IMG_8563.JPG', '/images/GalleryImages/LargeScreen/IMG_9843.jpeg', '/images/GalleryImages/LargeScreen/IMG_7627.jpeg', '/images/GalleryImages/LargeScreen/IMG_0161.jpeg', '/images/GalleryImages/LargeScreen/IMG_0252 2.JPG', '/images/GalleryImages/LargeScreen/IMG_4685 2.JPG', '/images/GalleryImages/LargeScreen/IMG_8594.JPG', '/images/GalleryImages/LargeScreen/IMG_9932.jpeg', '/images/GalleryImages/LargeScreen/IMG_0055.JPG', '/images/GalleryImages/LargeScreen/IMG_8019.JPG', '/images/GalleryImages/LargeScreen/IMG_8541.JPG', '/images/GalleryImages/LargeScreen/IMG_0040.JPG', '/images/GalleryImages/LargeScreen/IMG_8284.JPG', '/images/GalleryImages/LargeScreen/IMG_9995.JPG', '/images/GalleryImages/LargeScreen/IMG_0063 2.JPG', '/images/GalleryImages/LargeScreen/IMG_4751 2.jpeg', '/images/GalleryImages/LargeScreen/IMG_4786 2.JPG', '/images/GalleryImages/LargeScreen/IMG_9915.jpeg', '/images/GalleryImages/LargeScreen/IMG_9997.JPG']
    const smallimages = ['/images/GalleryImages/SmallScreen/IMG_8652 2.jpeg', '/images/GalleryImages/SmallScreen/C712E0D1-BD2C-4200-BF5C-76BA513F5D92.jpeg', '/images/GalleryImages/SmallScreen/IMG_8014.jpeg', '/images/GalleryImages/SmallScreen/IMG_7565.jpeg', '/images/GalleryImages/SmallScreen/IMG_9652.jpeg', '/images/GalleryImages/SmallScreen/IMG_9916.jpeg', '/images/GalleryImages/SmallScreen/IMG_6837.jpeg', '/images/GalleryImages/SmallScreen/exported_image.jpeg', '/images/GalleryImages/SmallScreen/IMG_4123 3.jpeg', '/images/GalleryImages/SmallScreen/IMG_8130.jpeg', '/images/GalleryImages/SmallScreen/CAD35F82-5F12-4FCD-8320-D757047146DE.jpeg', '/images/GalleryImages/SmallScreen/IMG_9433.jpeg', '/images/GalleryImages/SmallScreen/IMG_8150.jpeg', '/images/GalleryImages/SmallScreen/IMG_4627 2.jpeg', '/images/GalleryImages/SmallScreen/448B7D32-3285-4A30-84A6-60D0D922E757.jpeg', '/images/GalleryImages/SmallScreen/IMG_4430 3.jpeg', '/images/GalleryImages/SmallScreen/IMG_4685 2.jpeg', '/images/GalleryImages/SmallScreen/IMG_8252.jpeg', '/images/GalleryImages/SmallScreen/IMG_6313 2.jpeg', '/images/GalleryImages/SmallScreen/D4793CCC-25F5-48A9-A985-2EF2D9C300DF.jpeg', '/images/GalleryImages/SmallScreen/IMG_4122.jpeg', '/images/GalleryImages/SmallScreen/IMG_8495.jpeg', '/images/GalleryImages/SmallScreen/IMG_4075 2.jpeg', '/images/GalleryImages/SmallScreen/IMG_9568.jpeg', '/images/GalleryImages/SmallScreen/BFCA5534-84BA-4B43-AFFD-7620287DE50E.jpeg', '/images/GalleryImages/SmallScreen/IMG_9933.jpeg', '/images/GalleryImages/SmallScreen/A2624C85-133A-4F82-9EC7-E85FF44F422D.jpeg', '/images/GalleryImages/SmallScreen/IMG_9056.jpeg', '/images/GalleryImages/SmallScreen/IMG_9696 2.jpeg', '/images/GalleryImages/SmallScreen/IMG_8738.jpeg', '/images/GalleryImages/SmallScreen/IMG_9938.jpeg', '/images/GalleryImages/SmallScreen/DF9EB6D2-F5A1-4B07-8781-3572978FA3B7.jpeg', '/images/GalleryImages/SmallScreen/IMG_7573 2.jpeg', '/images/GalleryImages/SmallScreen/IMG_6678.jpeg', '/images/GalleryImages/SmallScreen/IMG_6496.jpeg', '/images/GalleryImages/SmallScreen/IMG_9217.jpeg']

    const imageToRender = windowWidth >= 768 ? largeimages : smallimages;
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
            {imageToRender.map((each, index) => (
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