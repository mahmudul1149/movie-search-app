import Navbar from "@/components/Navbar";
import { AuthProvider } from "../authcontext/authcontext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
