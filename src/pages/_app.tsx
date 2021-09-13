import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Header } from "@components/layouts";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="text-white bg-gradient">
      <AnimatePresence>{showHeader && <Header setShowHeader={setShowHeader} />}</AnimatePresence>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
