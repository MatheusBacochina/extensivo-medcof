import "./globals.css";
import { Inter, Sora, Montserrat, Poppins } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";



const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
const Mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">

      <body
        className={`${sora.variable} ${inter.variable} ${Mont.variable} ${poppins.variable}`}
      >
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-5XPK7SC7" />
    </html>
  );
}
