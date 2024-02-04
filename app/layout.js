import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
    title: "Welcome to Kitchen Sinkhole",
    description: "About Kitchen Sinkhole, an EVE Online Corporation",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="mx-auto relative">
                <img
                    src="Images/Hero-Flipped-Main.png"
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
