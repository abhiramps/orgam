import Head from 'next/head'
import '../styles/globals.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Orgam</title>
      </Head>


      <Component {...pageProps} />

    </>
  )

}

export default MyApp
