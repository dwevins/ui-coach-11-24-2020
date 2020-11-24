
import '../styles/styles.css'

/**
 * Renders the app
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp