import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../components/Sidebar";
import { ProgressProvider } from "../components/ProgressContext";
import { ThemeProvider } from "../components/ThemeContext";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ai_study_guide_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white min-h-screen antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <ThemeProvider>
          <ProgressProvider>
            <div className="flex flex-col lg:flex-row min-h-screen">
              <Sidebar />
              <main className="flex-1 min-w-0 p-5 md:p-10 lg:p-14 max-w-6xl">
                {children}
              </main>
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
