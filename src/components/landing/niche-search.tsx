'use client';
import { FlowButton } from '@/components/ui/flow-button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function NicheSearch() {

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const images = [
    { src: "https://i.imgur.com/NNzOliK.png", alt: "Powered by Gemini" },
    { src: "https://i.imgur.com/deUD5R5.png", alt: "Mais um logo" },
    { src: "https://i.imgur.com/UuRc8mX.png", alt: "Mais um logo" },
    { src: "https://i.imgur.com/7P9pUs4.png", alt: "ViralBe.AI Logo" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-card/50 backdrop-blur-lg border border-primary/20 rounded-xl shadow-lg shadow-primary/10">
        <div className="flex justify-center mb-6">
            <FlowButton
              text="Encontrar vídeos virais"
              onClick={handleRedirect}
            />
        </div>
        <motion.div 
          className="mt-4 flex justify-center items-center gap-4 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={40}
                  className="h-auto mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
  );
}
