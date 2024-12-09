import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "Udemy NextJS Tutorial",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-8">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
