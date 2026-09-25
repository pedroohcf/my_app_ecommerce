// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProvedorCarrinho } from "./data/contexts/ContextoCarrinho";
import ProvedorSessao from "@/app/components/template/ProvedorSessao";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Next.js",
  description: "Aplicação e-commerce desenvolvida com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen`}>
        <ProvedorSessao>
          <ProvedorCarrinho>
            {children}
          </ProvedorCarrinho>
        </ProvedorSessao>
      </body>
    </html>
  );
}