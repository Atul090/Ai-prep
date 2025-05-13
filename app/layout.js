import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["lsatin"]})

export const metadata = {
  title: "PrepGuage",
  description: "Prepare for your inetrview with AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} `}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {/* headder */}
              <Header/>
              <main className="min-h-screen">{children}</main>
              {/* Footer */}
              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-200">
                  <p>
                    Made with love by Atul
                  </p>
                </div>
              </footer>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
