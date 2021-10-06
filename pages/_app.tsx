import { initRequest } from "@/services/req";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    initRequest(
      "https://lxz03fie0k.execute-api.ap-northeast-1.amazonaws.com/prod"
    ).then(() => {
      setIsReady(true);
    });
  }, []);
  return isReady ? <Component {...pageProps} /> : <div></div>;
}
export default MyApp;
