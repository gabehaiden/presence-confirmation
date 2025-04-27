"use client"

import { Toaster } from "@/components/ui/toaster";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "pink"
    }
  }
})

const system = createSystem(defaultConfig, config)

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <Toaster />
      {children}
    </ChakraProvider>
  )
}