import type { Metadata } from "next"
import "./globals.scss"
import styles from "./layout.module.scss"
import { WelcomeScroll } from "@/components/ui/WelcomeScroll/WelcomeScroll"
import { AudioPlayer }   from "@/components/ui/AudioPlayer/AudioPlayer"
import { ApolloProvider }  from "@/context/ApolloProvider" 

export const metadata: Metadata = {
  title: "Harry Potter — Enciclopédia Bruxa",
  description: "Explore personagens, casas, patronos e feitiços do universo de Harry Potter.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
      <ApolloProvider>
        <WelcomeScroll />
        <AudioPlayer />
        <div className={styles.parchmentWrapper}>
          {children}
        </div>
        </ApolloProvider>
      </body>
    </html>
  )
}
