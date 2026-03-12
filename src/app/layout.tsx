import type { Metadata } from "next";
import { ApolloProvider } from "@/context/ApolloProvider";
import { Header } from "@/components/layout/Header/Header";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Wiki Mágica — Harry Potter",
  description: "A jornada mágica do desenvolvimento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ApolloProvider>
          <Header />
          <main style={{ paddingTop: "70px" }}>
            {children}
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
