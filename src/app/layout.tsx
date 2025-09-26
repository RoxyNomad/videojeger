import { ReactNode } from "react";
import "@/styles/globals.scss";
import "@/styles/layout.scss";
import Image from "next/image";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header>
          <h1></h1>
        </header>
        <main>
          <Image src="Videojeger Logo.svg" alt="Logo" className="logo" />
          {children}
        </main>
        <footer>
          <p>© {new Date().getFullYear()} Videojeger</p>
        </footer>
      </body>
    </html>
  );
}