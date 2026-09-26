import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
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
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
          },
          variables: {
            colorText: "#1C1B1F",
            colorPrimary: "#6750A4",
            colorBackground: "#FFFBFE",
            colorInputBackground: "#E7E0EC",
            colorInputText: "#1C1B1F",
            colorDanger: "#B3261E",
          },
          elements: {
            card: "shadow-lg border-0 rounded-[24px] bg-md-surface-container",
            formButtonPrimary: "rounded-full transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md",
            socialButtonsBlockButton: "border-md-outline text-md-on-bg rounded-full",
            formFieldInput: "rounded-t-lg rounded-b-none border-0 border-b-2 border-md-outline bg-md-surface-container-low h-14 focus:ring-0 focus:border-b-md-primary",
            formFieldLabel: "text-md-on-surface-variant font-medium",
            footerActionLink: "text-md-primary hover:text-md-primary/80 font-medium",
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
