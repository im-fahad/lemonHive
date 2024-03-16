import type {Metadata} from "next";
import "@/assets/css/main.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Lemon Hive",
    description: "Generated by create next app",
};

export default function RootLayout(
    {children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <main className="lh-main">
            {/*nav*/}
            <Navbar/>

            <div className="lh-main__inner">
                {children}
            </div>
            
            {/*footer*/}
            <Footer/>
        </main>
        </body>
        </html>
    );
}