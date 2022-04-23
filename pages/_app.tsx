import { initRequest } from "@/services/req";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    initRequest(
      "https://lxz03fie0k.execute-api.ap-northeast-1.amazonaws.com/prod"
    ).then(() => {
      setIsReady(true);
    });
  }, []);
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-125030746-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-125030746-1');
        `}
      </Script>
      {isReady ? <Component {...pageProps} /> : <div></div>}
    </>
  );
}
export default MyApp;
