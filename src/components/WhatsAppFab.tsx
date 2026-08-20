import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WA } from "@/lib/site";

const WhatsAppGlyph = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
    <path d="M16.04 3.2c-7.09 0-12.85 5.76-12.85 12.85 0 2.27.6 4.48 1.73 6.43L3.2 28.8l6.5-1.7a12.8 12.8 0 0 0 6.34 1.66h.01c7.08 0 12.84-5.76 12.85-12.85a12.77 12.77 0 0 0-3.76-9.09 12.76 12.76 0 0 0-9.1-3.62zm0 23.16h-.01a10.67 10.67 0 0 1-5.44-1.49l-.39-.23-4.04 1.06 1.08-3.94-.26-.4a10.65 10.65 0 0 1-1.63-5.69c0-5.89 4.8-10.68 10.69-10.68 2.86 0 5.54 1.11 7.56 3.13a10.62 10.62 0 0 1 3.13 7.56c-.01 5.89-4.8 10.68-10.69 10.68zm5.86-8c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.58-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
  </svg>
);

export const WhatsAppFab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA.final}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Artesanal Car"
      className={cn(
        "fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_14px_34px_-10px_rgba(37,211,102,0.8)] transition-all duration-500 hover:scale-105 sm:bottom-7 sm:right-7",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
      <WhatsAppGlyph />
    </a>
  );
};
