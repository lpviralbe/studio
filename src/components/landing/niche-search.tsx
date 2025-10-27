'use client';
import { FlowButton } from '@/components/ui/flow-button';
import { useI18n } from '@/lib/i18n';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function NicheSearch() {
  const { t } = useI18n();

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  const logos = [
    { src: 'https://i.imgur.com/NNzOliK.png', alt: 'TikTok' },
    { src: 'https://i.imgur.com/deUD5R5.png', alt: 'YouTube' },
    { src: 'https://i.imgur.com/UuRc8mX.png', alt: 'Instagram' },
    { src: 'https://i.imgur.com/7P9pUs4.png', alt: 'Kwai' },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-6">
          <FlowButton
            text={t('nicheSearch.button')}
            onClick={handleRedirect}
          />
      </div>
      <div className="flex justify-center items-center gap-8 mt-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="object-contain h-10 w-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
