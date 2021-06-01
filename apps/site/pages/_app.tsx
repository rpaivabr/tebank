import React, { useEffect } from 'react';
import './styles.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('@tebank/custom-ui')
  })

  return <Component {...pageProps} />
}

export default MyApp;
