import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import SidebarDemo from "@/components/Sidebar";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import { NavbarDemo } from "@/components/NavbarDemo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tharindu Epasingha ",
  description:
    "Tharindu is a Digital craftsman who is hoping to live a deep life full of adventure and growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(spaceGrotesk.className, "relative h-screen w-screen")}>
      
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
