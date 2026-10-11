import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner"
import "@stream-io/video-react-sdk/dist/css/styles.css";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
          },
          variables: {
            colorText: "#FFFFFF",
            colorPrimary: "#8B5CF6",
            colorBackground: "#13111C",
            colorInputBackground: "#1B1827",
            colorInputText: "#FFFFFF",
            colorDanger: "#F43F5E",
          },
          elements: {
            card: "shadow-2xl border border-white/10 rounded-3xl bg-[#13111C]/95 backdrop-blur-2xl",
            formButtonPrimary: "rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 font-bold shadow-lg shadow-violet-600/30 transition-all duration-200 active:scale-95",
            socialButtonsBlockButton: "border border-white/10 text-white rounded-xl bg-white/5 hover:bg-white/10 transition-all",
            formFieldInput: "rounded-xl border border-white/10 bg-white/5 text-white h-11 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500",
            formFieldLabel: "text-slate-300 font-medium text-xs",
            footerActionLink: "text-violet-400 hover:text-violet-300 font-medium",
            headerTitle: "text-white font-bold text-2xl tracking-tight",
            headerSubtitle: "text-slate-400 text-sm",
            dividerLine: "bg-white/10",
            dividerText: "text-slate-500 text-xs uppercase",
          }
        }}
      >
        <body
          className={`${roboto.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
