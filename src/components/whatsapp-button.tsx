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
        viewBox="0 0 32 32" 
        className="h-8 w-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1,0A16,16,0,0,0,5.6,26.4L3,29,5.8,28.2A16,16,0,1,0,16.1,0ZM11.1,7.9c.5-.06,1.4.4,1.4,2.3V11s-1.5-1.3-2.9-1.1c-2.3.3-3.9,2.9-3.9,5.7s1.6,5.4,4.9,5.4,5.1-2.2,5.1-5.6V12.7c.3.5.7.8,1.2.9h.1c.5,0,1-.3,1.4-1.3s.4-3.5-1.5-5.4a5.9,5.9,0,0,0-4.2-2,6.7,6.7,0,0,0-5,.9,3.7,3.7,0,0,0-1,2.8c0,.5.1.9.4,1.3H6.5c.2-.6.3-1.3.3-1.9A5,5,0,0,1,11.1,7.9Zm7.5,10.6c0,2.1-1.3,4.4-4,4.4s-3.9-2.3-3.9-4.4,1.3-4.4,3.9-4.4,4,2.3,4,4.4Z" />
      </svg>
    </Link>
  );
}
