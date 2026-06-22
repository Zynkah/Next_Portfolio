"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useSound } from "./sound-provider";

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "At least 5 characters." })
    .max(100, { message: "Keep it under 100 characters." }),
  message: z
    .string()
    .min(10, { message: "At least 10 characters." })
    .max(1000, { message: "Keep it under 1000 characters." }),
});

type Values = z.infer<typeof schema>;

// 👉 Set this to the address you want messages delivered to.
const TO_EMAIL = "you@example.com";

const inputClass =
  "w-full border border-retro-line bg-retro-surface2 px-3.5 py-3 font-mono text-sm text-retro-text outline-none transition-colors placeholder:text-retro-muted focus:border-retro-a1";
const labelClass =
  "mb-2 block font-mono text-[11px] tracking-[1px] text-retro-muted";
const errorClass = "mt-1.5 font-mono text-[11px] text-[#ff5d7a]";

export function ContactForm() {
  const { blip } = useSound();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", subject: "", message: "" },
  });

  const onSubmit = (values: Values) => {
    // No backend — open the visitor's mail client with everything pre-filled.
    const body = `${values.message}\n\n— Reply to: ${values.email}`;
    const href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    blip(720);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <div
      className="rounded border border-retro-line bg-retro-bg p-6 text-left"
      style={{ boxShadow: "0 0 40px var(--glow)" }}
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-[11px] tracking-[2px] text-retro-a1">
        <span
          className="inline-block h-2 w-2 rounded-full bg-retro-a1"
          style={{ animation: "blink 1.4s steps(1) infinite" }}
        />
        DIRECT MESSAGE
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            EMAIL
          </label>
          <input
            id="cf-email"
            type="text"
            placeholder="email@example.com"
            className={inputClass}
            {...register("email")}
          />
          {errors.email && (
            <p className={errorClass}>▸ {errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-subject" className={labelClass}>
            SUBJECT
          </label>
          <input
            id="cf-subject"
            type="text"
            placeholder="Let's work together"
            className={inputClass}
            {...register("subject")}
          />
          {errors.subject && (
            <p className={errorClass}>▸ {errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-message" className={labelClass}>
            MESSAGE
          </label>
          <textarea
            id="cf-message"
            rows={5}
            placeholder="Tell me about the project, role, or stream idea…"
            className={`${inputClass} resize-none`}
            {...register("message")}
          />
          {errors.message && (
            <p className={errorClass}>▸ {errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          onMouseEnter={() => blip(640)}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-retro-a1 px-6 py-3.5 font-mono text-sm font-bold text-[#06121d] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-60"
          style={{ boxShadow: "5px 5px 0 var(--a3)" }}
        >
          {sent ? "▶ OPENING YOUR MAIL APP…" : "▶ SEND MESSAGE"}
        </motion.button>
      </form>
    </div>
  );
}
