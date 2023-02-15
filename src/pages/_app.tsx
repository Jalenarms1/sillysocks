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

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => setIsPageLoading(true);
    const handleComplete = () => setIsPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if(isPageLoading) {
    return (
      <div className="h-screen bg-zinc-900">

      </div>
    )
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
          key={router.route}
          initial={{ opacity: .9 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
        <SessionProvider session={session}>
          <Navbar />
          <main className="min-h-screen bg-zinc-900">
            <Component {...pageProps} />

          </main>
          <Footer />
        </SessionProvider>

        </motion.div>

    </AnimatePresence>
  );
};

export default trpc.withTRPC(MyApp);
