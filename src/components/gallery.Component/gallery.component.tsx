import React, { useState, useEffect, useRef } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

interface ImageProps {
  id: React.Key;
  url: string;
  highResUrl?: string;
}

interface GalleryCompProps {
  filteredImage: ImageProps[];
}

const GalleryComp: React.FC<GalleryCompProps> = ({ filteredImage }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
  const [imageHeights, setImageHeights] = useState<{[key: string]: number}>({});
  const imageRefs = useRef<{[key: string]: HTMLImageElement}>({});

  // Calculate image heights after loading
  useEffect(() => {
    const calculateHeights = () => {
      const heights: {[key: string]: number} = {};
      
      Object.entries(imageRefs.current).forEach(([id, imgRef]) => {
        if (imgRef) {
          heights[id] = imgRef.naturalHeight;
        }
      });

      setImageHeights(heights);
    };

    // Slight delay to ensure images are loaded
    const timer = setTimeout(calculateHeights, 100);

    return () => clearTimeout(timer);
  }, [filteredImage]);

  const openLightbox = (image: ImageProps) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Custom masonry-like layout
  const renderMasonryGrid = () => {
    // Determine number of columns based on screen width
    const columnCount = window.innerWidth < 640 ? 1 : 
                        window.innerWidth < 1024 ? 2 : 3;
    
    // Create columns
    const columns = Array.from({ length: columnCount }, () => [] as React.ReactNode[]);

    // Distribute images across columns
    filteredImage.forEach((image, index) => {
      const columnIndex = index % columnCount;
      const height = imageHeights[image.id as string] || 300; // Default height

      columns[columnIndex].push(
        <motion.div
          key={image.id}
          layout
          className="mb-4 relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
          role="listitem"
          onClick={() => openLightbox(image)}
        >
          <img
            ref={el => {
              if (el) {
                imageRefs.current[image.id as string] = el;
              }
            }}
            src={image.url}
            alt="Photography display"
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <Maximize2 
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity" 
              size={32} 
            />
          </div>
        </motion.div>
      );
    });

    return (
      <div className="flex justify-center gap-4 max-w-7xl mx-auto">
        {columns.map((column, index) => (
          <div key={index} className="w-full">
            {column}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-8 lg:px-16">
      <LayoutGroup>
        {renderMasonryGrid()}

        {/* Lightbox */}
        {selectedImage && (
          <motion.div 
            layoutId="lightbox"
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              layoutId={`image-${selectedImage.id}`}
              className="max-w-[90vw] max-h-[90vh] relative"
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 rounded-full p-2 z-60"
              >
                <X color="white" size={24} />
              </button>
              <img
                src={selectedImage.highResUrl || selectedImage.url}
                alt="Expanded photography"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </LayoutGroup>
    </div>
  );
};

export default GalleryComp;