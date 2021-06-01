import { useEffect, useRef } from 'react';
import styles from './Header.module.css'

export default function Header() {
  const buttonRef = useRef<HTMLButtonElement>();

  useEffect(() => {
    if (buttonRef?.current) {
      buttonRef.current.addEventListener('myclick', handleClick);
    }
  }, [buttonRef]);

  function handleClick(e: CustomEvent) {
    console.log(e);
    window.open('http://localhost:4200', '_blank');
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <te-logo />
          <nav className={styles.nav}>
            <te-button color="success" ref={buttonRef} click={handleClick}>Ir para o app</te-button>
          </nav>
      </div>
    </header>
  )
}
