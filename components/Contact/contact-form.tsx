"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSound } from "../sound-provider";
import { schema } from "./schema";
import { SubmitButton } from "./submit-button";
import { errorClass, inputClass, labelClass, TO_EMAIL } from "./constants";
import { ContactInput } from "./contact-input";

type Values = z.infer<typeof schema>;

type ContactForm = {
  email: string;
  password: string;
  username: string;
};

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
        <ContactInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          register={register}
          errors={errors}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />
        <ContactInput
          label="Subject"
          name="subject"
          placeholder="Let's work together"
          register={register}
          errors={errors}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />

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

        <SubmitButton isSubmitting={isSubmitting} sent={sent} blip={blip} />
      </form>
    </div>
  );
}
