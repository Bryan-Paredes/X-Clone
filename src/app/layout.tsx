/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from "next";
import {Providers} from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clon de X",
  description: "Generado moviendo las manitas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
