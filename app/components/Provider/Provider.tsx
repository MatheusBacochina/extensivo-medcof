'use client'
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
const Provider = ({ children }: { children: ReactNode }) => (
  
        <NextUIProvider>
            {children}
        </NextUIProvider>
    
)

export default Provider