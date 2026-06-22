"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  blip: (freq?: number) => void;
};

const SoundContext = createContext<SoundContextValue>({
  enabled: false,
  toggle: () => {},
  blip: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  const blip = useCallback(
    (freq?: number) => {
      if (!enabled) return;
      try {
        const AC =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const ctx = ctxRef.current || (ctxRef.current = new AC());
        if (ctx.state === "suspended") ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = freq || 520 + Math.random() * 180;
        osc.connect(gain);
        gain.connect(ctx.destination);
        const t = ctx.currentTime;
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
        osc.start(t);
        osc.stop(t + 0.1);
      } catch {
        /* no-op */
      }
    },
    [enabled],
  );

  const toggle = useCallback(() => setEnabled((e) => !e), []);

  return (
    <SoundContext.Provider value={{ enabled, toggle, blip }}>
      {children}
    </SoundContext.Provider>
  );
}

export const useSound = () => useContext(SoundContext);
