import { motion } from "framer-motion";

interface SubmitButtonProps {
    isSubmitting: boolean;
    sent: boolean;
    blip: (arg: number) => void;
}

export const SubmitButton = ({ isSubmitting, sent, blip}: SubmitButtonProps) => { 
    return (
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
    );
}