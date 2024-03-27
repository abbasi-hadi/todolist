import { Html, Head, Main, NextScript } from 'next/document';
import { ToastContainer, toast } from 'react-toastify';

export default function Document() {
  return (
    <Html lang="fa" dir='rtl'>
      <Head />
      <body className="bg-gradient-to-bl  from-zinc-900 to-zinc-700 min-h-screen">
        <ToastContainer />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
