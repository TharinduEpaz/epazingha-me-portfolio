
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import SidebarDemo from "@/components/Sidebar";

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
      <body
        className={twMerge(
          spaceGrotesk.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
      <SidebarDemo />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto z-10">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
