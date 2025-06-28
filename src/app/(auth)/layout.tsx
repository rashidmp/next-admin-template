import type { Metadata } from "next";
import { APP_CONFIG } from "@/config/app";

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} | Login`,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      {children}
    </main>
  );
}
