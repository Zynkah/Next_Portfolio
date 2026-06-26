"use client";

import { useState, useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSound } from "../sound-provider";
import { schema } from "./schema";
import { SubmitButton } from "./submit-button";
import { errorClass, inputClass, labelClass, TO_EMAIL } from "./constants";
import { ContactInput } from "./contact-input";

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const { blip } = useSound();
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", subject: "", message: "" },
  });

  const onSubmit = () => {
    blip(720);
    setSent(true);
    formRef.current?.submit(); // native submit after RHF validation passes
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

      <form
        ref={formRef}
        action={`https://formsubmit.co/${TO_EMAIL}`}
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)(e);
        }}
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <ContactInput
          label="EMAIL"
          name="email"
          type="email"
          placeholder="email@example.com"
          register={register}
          errors={errors}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />
        <ContactInput
          label="SUBJECT"
          name="subject"
          placeholder="Let's work together"
          register={register}
          errors={errors}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />
        <ContactInput
          label="MESSAGE"
          name="message"
          placeholder="Tell me about the project, role, or stream idea…"
          register={register}
          errors={errors}
          labelClass={labelClass}
          inputClass={inputClass}
          errorClass={errorClass}
        />

        <SubmitButton isSubmitting={isSubmitting} sent={sent} blip={blip} />
      </form>
    </div>
  );
}
