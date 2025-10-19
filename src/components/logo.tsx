import Image from 'next/image';
import type { SVGProps } from 'react';

export function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return (
    <Image
      src="https://i.imgur.com/9EJR281.png"
      alt="ViralBe.AI Logo"
      width={120}
      height={40}
      {...props}
    />
  );
}
