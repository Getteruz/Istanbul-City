
import NextNProgress from "nextjs-progressbar";
import MainLayout from '@/components/layout/main-layout'
 import "../styles/globals.css"
 import "../styles/colm.css"

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  return (
    <main >
         <NextNProgress
          color="orange"
          height={4}
          options={{ showSpinner: false }}
        />
          <MainLayout >
          <Component {...pageProps} />
          <ToastContainer  
            position="bottom-right"
            autoClose={1000}
            theme="colored"
          />
          </MainLayout>
          
</main>
  )
 
}
