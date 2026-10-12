import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../components/Sidebar";
import { ProgressProvider } from "../components/ProgressContext";

export const metadata: Metadata = {
  title: "AI Study Guide | Symbolic & Fuzzy Artificial Intelligence",
  description:
    "Comprehensive static study guide covering Expert Systems, First-Order Predicate Logic, Resolution Refutation, Mamdani and Sugeno Fuzzy Inference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen antialiased selection:bg-black selection:text-white">
        <ProgressProvider>
          <div className="flex flex-col lg:flex-row min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0 p-5 md:p-10 lg:p-14 max-w-6xl">
              {children}
            </main>
          </div>
        </ProgressProvider>
      </body>
    </html>
  );
}
