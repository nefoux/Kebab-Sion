import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kebab Sion - Votre kebab préféré à Sion 🇨🇭",
  description:
    "🥙 Kebab Sion – Goûtez nos spécialités maison, fraîches et préparées sur place. Sandwichs, assiettes, burgers. Commandez directement sur WhatsApp !",
  keywords:
    "kebab Sion, kebab à emporter, snack Sion, livraison kebab Valais, restaurant kebab Sion, sandwich kebab",
  authors: [{ name: "Kebab Sion" }],
  openGraph: {
    title: "Kebab Sion - Votre kebab préféré à Sion 🇨🇭",
    description:
      "🥙 Kebab Sion – Goûtez nos spécialités maison, fraîches et préparées sur place. Commandez directement sur WhatsApp !",
    type: "website",
    locale: "fr_CH",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png", // correspond à ton fichier dans /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
