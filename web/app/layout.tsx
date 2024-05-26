import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Spacer } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers'
import { Providers } from "./providers"
import { AcmeLogo } from "../public/LuckyChainLogo.jsx";

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import Web3ModalProvider from '@/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en" className='dark'>
      <body>
        <Web3ModalProvider initialState={initialState}>
          <Providers>
            <Navbar className="absolute text-white top-0 h-[80px] z-50 w-full flex items-center">
              <Link href="/" >
                <NavbarBrand>
                  <AcmeLogo />
                  <p className="font-bold text-inherit">Luckeia</p>
                </NavbarBrand>
              </Link>
              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link color="foreground" href="/draw">
                    Draw
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="/roadmap">
                    Roadmap
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="/about" aria-current="page">
                    About
                  </Link>
                </NavbarItem>
              </NavbarContent>
              <div className="absolute right-2">
                <w3m-button />
              </div>
            </Navbar>
            {children}
          </Providers>
        </Web3ModalProvider >
      </body>
    </html>
  );
}
