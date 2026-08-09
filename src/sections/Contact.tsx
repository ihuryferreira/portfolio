import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

type FormStatus = "idle" | "loading" | "success" | "error";

function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const data = new FormData();
      data.append("nome", formData.nome);
      data.append("email", formData.email);
      data.append("mensagem", formData.mensagem);

      const response = await fetch(
        "https://ihuryferreira.com.br/enviar-email.php",
        {
          method: "POST",
          body: data,
        }
      );

      const text = await response.text();

      let result: { success: boolean; message: string };
      try {
        result = JSON.parse(text);
      } catch {
        setStatus("error");
        setFeedback(
          "Resposta inválida do servidor. Verifique o console (F12) para detalhes."
        );
        console.error("Resposta do PHP (não é JSON):", text);
        return;
      }

      if (response.ok && result.success) {
        setStatus("success");
        setFeedback(result.message || "Mensagem enviada!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        throw new Error(result.message || "Erro no envio.");
      }
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Erro de conexão. Tente novamente."
      );
    }
  };

  return (
    <section id="contato" className="py-0 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contato"
          subtitle="Vamos conversar sobre um projeto"
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
          
          {/* Card de Informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="rounded-4xl border border-slate-800/80 bg-slate-900/95 p-5 sm:p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.8)]"
          >
            <p className="text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-sky-400/70">
              Vamos conversar
            </p>
            {/* CORREÇÃO: text-2xl no mobile */}
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
              Enviar uma mensagem
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Se você tem um projeto ou parceria em mente, me envie uma mensagem
              e a gente planeja juntos.
            </p>

            <div className="mt-8 space-y-4">
              {/* Bloco do E-mail */}
              <div className="flex items-start gap-3 sm:gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4 min-w-0">
                <div className="mt-1 rounded-3xl bg-sky-500/10 p-3 text-sky-300 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 text-sm sm:text-base text-white break-all sm:break-normal selection:bg-sky-500/30">
                    contato@ihuryferreira.com.br
                  </p>
                </div>
              </div>
              
              {/* Bloco de Localização */}
              <div className="flex items-start gap-3 sm:gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
                <div className="mt-1 rounded-3xl bg-sky-500/10 p-3 text-sky-300 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Localização</p>
                  <p className="mt-1 text-sm sm:text-base text-white">Remoto / Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-4xl border border-slate-800/80 bg-slate-900/95 p-5 sm:p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.8)]"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <label className="block">
                <span className="text-sm text-slate-400">Nome</span>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-sm sm:text-base text-slate-100 outline-none transition focus:border-sky-500/60 disabled:opacity-60"
                  disabled={status === "loading"}
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-sm sm:text-base text-slate-100 outline-none transition focus:border-sky-500/60 disabled:opacity-60"
                  disabled={status === "loading"}
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Mensagem</span>
                <textarea
                  rows={5} // Reduzido sutilmente de 6 para 5 para economizar altura no celular
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Como posso ajudar?"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-sm sm:text-base text-slate-100 outline-none transition focus:border-sky-500/60 disabled:opacity-60"
                  disabled={status === "loading"}
                />
              </label>

              {feedback && (
                <div
                  className={`flex items-start sm:items-center gap-2 rounded-2xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "bg-red-500/10 text-red-300"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle size={18} className="mt-0.5 sm:mt-0 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 sm:mt-0 shrink-0" />
                  )}
                  <span className="leading-tight">{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;