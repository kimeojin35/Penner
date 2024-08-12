import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/utils/query/Provider";
import ReduxProvider from "@/utils/store/Provider";

import App from "./App";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Penner",
  description: "불가능한 일에 도전하며, 그림으로써 불가능을 가능으로 만든다.",
};

const RootLayout = ({
  auth,
  children,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  className="bg-gray50 dark:bg-gray950"`}
      >
        <QueryProvider>
          <ReduxProvider>
            <div className="bg-gray50 dark:bg-gray950 min-h-screen h-full">
              <Navbar />
              {auth}
              {children}
              <App />
            </div>
            <Footer />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
