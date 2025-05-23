import type { Metadata } from "next";
import "../globals.css";
import { Sidebar } from "@/components/app/Sidebar";
import { Providers } from "../providers";

export const metadata: Metadata = {
    title: {
        template: "%s • Sabelo",
        default: "Sabelo",
    },
    description: "Sabelo, la app de finanzas no. 1 en Argentina",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <div className="flex flex-col md:flex-row min-h-screen w-full">
                <Sidebar />
                {children}
            </div>
        </Providers>
    );
}
