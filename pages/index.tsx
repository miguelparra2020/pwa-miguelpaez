import styles from '../styles/Home.module.css'
import Iframe from 'react-iframe'

export default function Home() {
  return (
    <div className={styles.container}>
<Iframe url="https://portafolio-mapp.vercel.app/"
        className={styles.container}/>
        </div>
  )
}


