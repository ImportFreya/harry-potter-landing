import type { Metadata } from "next";
import { ApolloProvider } from "@/context/ApolloProvider";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "A Jornada Mágica do Desenvolvimento",
  description: "Harry Potter Landing Page — Desafio Técnico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
