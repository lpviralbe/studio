import Image from 'next/image';

export function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return (
    <Image
      src="https://i.imgur.com/7P9pUs4.png"
      alt="ViralBe.AI Logo"
      width={120}
      height={40}
      {...props}
      className="h-auto"
    />
  );
}
