import styles from './header.module.css';

export default function Header(){
  return(
    <>
    <header>
    <h1 className={styles.greeting}>
        Dog and Puppy Show
    </h1>
    </header>
    </>
  )
}