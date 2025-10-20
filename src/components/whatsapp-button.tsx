import Link from 'next/link';

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511978646907"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M16.75 13.96c.25.13.43.2.5.28.08.09.12.18.12.28 0 .14-.04.28-.12.4-.08.13-.25.26-.5.4-.25.14-.58.28-1 .45-.42.17-.9.3-1.45.3-.55 0-1.06-.1-1.53-.32s-.88-.52-1.24-.9-.62-.8-1.08-1.42-.55-1.1-.55-1.5 0-.7.22-1 .22-.4.4-.52.26-.2.4-.28.25-.13.34-.13h.1c.1 0 .2.04.28.13.08.08.13.2.13.35s-.05.3-.13.45c-.08.14-.2.3-.4.5s-.35.4-.48.54c-.13.15-.22.28-.22.4s.08.23.24.35.3.2.45.2h.1c.18 0 .38-.1.6-.28s.4-.38.56-.57.28-.35.4-.48.2-.2.28-.2h.1c.13 0 .25.04.34.13.1.09.14.2.14.34zM20.1 3.9C17.9 1.7 15 .5 12 .5 5.9.5.5 5.9.5 12c0 2 .6 3.9 1.7 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.4 5.4 1.4 6.1 0 11.5-5.4 11.5-11.5 0-3-1.2-5.9-3.4-8.1zM12 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.3-.4c-1-1.6-1.5-3.5-1.5-5.4C2 6.9 6.5 2.5 12 2.5s10 4.5 10 9.9-4.5 9.1-10 9.1z" />
      </svg>
    </Link>
  );
}
