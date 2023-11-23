import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Welcome to Kitchen Sinkole",
    description: "About Kitchen Sinkhole, an EVE Online Corporation",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="relative">
                <div className="bg-[url(../public/Hero-image.png)] bg-cover h-screen absolute -z-10 w-full">
                    <Navbar />
                </div>
                <main className="px-64">{children}</main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
