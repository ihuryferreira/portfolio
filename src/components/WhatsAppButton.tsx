import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Olá, Ihury! Encontrei seu portfólio e gostaria de conversar sobre um projeto."
  );

  return (
    <a
      href={`https://wa.me/5562994155601?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale comigo pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <FaWhatsapp size={22} aria-hidden="true" />
      <span>Fale pelo WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
