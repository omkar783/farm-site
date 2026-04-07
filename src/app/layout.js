import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DattuBhau Bhole Farm House | Fresh Fruits from Our Farm",
  description: "Experience the finest mangoes, sapodillas, and black berries from DattuBhau Bhole Farm House in Deogaon, Maharashtra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
