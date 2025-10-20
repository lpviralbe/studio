import Link from 'next/link';

export function WhatsAppButton() {
  const message = encodeURIComponent('Tenho uma dúvida sobre o App ViralBe.ai');
  return (
    <Link
      href={`https://wa.me/5511978646907?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.36 21.85 12.04 21.85C17.5 21.85 21.95 17.4 21.95 11.94C21.95 9.27 20.9 6.83 19.05 4.98C17.2 3.13 14.76 2.08 12.04 2.04L12.04 2ZM17.53 14.38C17.28 15.09 16.36 15.61 15.82 15.68C15.28 15.74 14.68 15.76 14.28 15.61C13.88 15.46 13.23 15.25 12.39 14.9C10.97 14.29 9.89 13.28 8.92 12.11C8.27 11.33 7.79 10.43 7.79 9.87C7.79 9.31 7.94 8.93 8.14 8.73C8.36 8.51 8.68 8.35 8.95 8.35C9.09 8.35 9.21 8.36 9.33 8.38C9.57 8.44 9.76 8.93 9.89 9.13C10.01 9.31 10.1 9.55 10.02 9.75C9.93 9.95 9.83 10.11 9.73 10.23C9.63 10.35 9.53 10.45 9.43 10.55C9.33 10.65 9.24 10.74 9.38 10.96C9.52 11.18 9.94 11.83 10.59 12.43C11.45 13.24 12.19 13.56 12.55 13.68C12.8 13.75 13.06 13.73 13.25 13.53C13.48 13.28 13.82 12.89 14.13 12.5C14.43 12.11 14.75 12.04 15.08 12.2C15.41 12.36 16.3 12.82 16.54 12.94C16.78 13.06 16.94 13.13 17.02 13.25C17.1 13.38 17.1 13.6 17.02 13.81C16.94 14.02 16.74 14.13 17.53 14.38Z"
          fill="white"
        ></path>
      </svg>
    </Link>
  );
}
