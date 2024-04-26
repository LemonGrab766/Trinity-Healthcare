import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/components/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trinity Sevices",
  description:
    "Trinity HealthCare Services: Leading healthcare consultancy and staff augmentation with over 30 years of innovation and expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserContextProvider>
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </UserContextProvider>
    </html>
  );
}
