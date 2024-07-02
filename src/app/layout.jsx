import Navbar from "@/components/organism/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Akash Lakade Portfolio",
    description: "Front End Devloper",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={cn(
                "flex h-screen w-screen flex-col overflow-hidden border border-red-500",
                inter.className
            )} >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="flex w-full flex-col flex-1 h-navScreen ">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
