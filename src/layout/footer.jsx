import styles from './footer.module.css';

export default function Footer(){
  return(
    <>
    <h3 className={styles.copy}>
      &copy; {new Date().getFullYear()}
    </h3>
    </>
  )
}