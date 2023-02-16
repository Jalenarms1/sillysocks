import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSetGetLocalStorage } from "../hooks/useLocalStorage";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const {cart, removeFromCart, addToCart, addOne, subtractOne, getTotal} = useSetGetLocalStorage()


 

  return (
    
        <SessionProvider session={session}>
          <Navbar cart={{cart, addToCart, removeFromCart, addOne, subtractOne, getTotal}} />
          <main className="min-h-screen bg-zinc-900">
            <Component {...pageProps} cart={{cart, addToCart, removeFromCart, addOne}} />

          </main>
          <Footer />
        </SessionProvider>

        
  );
};

export default trpc.withTRPC(MyApp);
