import { GA_TRACKING_ID, pageview } from '../lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/global.css';
import 'zenn-content-css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}
