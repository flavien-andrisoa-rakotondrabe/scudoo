"use client";

import {
  useState,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import { Toaster } from "@/components/ui/sonner";

type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

interface ToastContextType {
  setToastPosition: Dispatch<SetStateAction<Position>>;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a useToast");
  }
  return context;
};

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toastPosition, setToastPosition] = useState<Position>("top-center");

  return (
    <ToastContext.Provider value={{ setToastPosition }}>
      <Toaster position={toastPosition} richColors />
      {children}
    </ToastContext.Provider>
  );
}
