import React from 'react'
import  images  from '../../data/images.js';
import GalleryComp from '../gallery.Component/gallery.component.js';


const HeroComp = () => {
    return(
        <div >
            <GalleryComp filteredImage={images} /> 
        </div>
    )
} 

export default HeroComp;