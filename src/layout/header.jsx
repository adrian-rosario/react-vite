import styles from './header.module.css';

export default function Header(){
  return(
    <>
      <h1 className={styles.greeting}>
        Dog and Puppy Show
      </h1>
    </>
  )
}