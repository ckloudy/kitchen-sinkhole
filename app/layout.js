import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import HeroFlipped from "../public/Hero-Flipped-Main.png";
import "./globals.css";

export const metadata = {
    title: "Welcome to Kitchen Sinkole",
    description: "About Kitchen Sinkhole, an EVE Online Corporation",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="mx-auto relative">
                <Image
                    src={HeroFlipped}
                    alt="hero image of a wormhole"
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="absolute -z-10 object-contain container"
                />
                <div className="container mx-auto px-5 overflow-hidden">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
