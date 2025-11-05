import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="https://i.imgur.com/dtgNQ9c.png" alt="ViralBe.ai Logo" width={28} height={28} />
      <span className="font-bold text-lg bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text">
        ViralBe.ai
      </span>
    </div>
  );
}
