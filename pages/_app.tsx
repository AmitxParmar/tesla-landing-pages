import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if(!isMounted){
    return null;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
