// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("Configurações do EmailJS não encontradas");
      }

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Email enviado com sucesso! Entrarei em contato em breve.",
      });
      form.current.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      let errorMessage = "Erro ao enviar email. Tente novamente mais tarde.";

      if (error.text && error.text.includes("Invalid grant")) {
        errorMessage =
          "Erro de autenticação. Por favor, reconfigure o serviço de email.";
      } else if (error.text && error.text.includes("412")) {
        errorMessage =
          "Erro de configuração do serviço. Verifique suas credenciais.";
      } else if (error.message === "Configurações do EmailJS não encontradas") {
        errorMessage =
          "Serviço de email não configurado. Entre em contato pelo LinkedIn.";
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100vh] bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Fale <span className="text-accent">comigo</span>
          </motion.h2>

          {/* Status message */}
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg text-center ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/50"
                  : "bg-red-500/20 text-red-400 border border-red-500/50"
              }`}
            >
              {status.message}
            </motion.div>
          )}

          {/* form */}
          <motion.form
            ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={sendEmail}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="user_name"
                placeholder="Nome"
                className="input"
                autoComplete="name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="input"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              className="input"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              className="textarea"
              autoComplete="off"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Enviando..." : "Enviar"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
