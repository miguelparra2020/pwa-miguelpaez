import styles from '../styles/Home.module.css'
import Iframe from 'react-iframe'

export default function Home() {
  return (
    <div className={styles.container}>
<Iframe url="https://the-house-contabilidad.vercel.app"
        width="100%"
        height="740px"
        id=""
        allowFullScreen 
        styles={{border: "0px"}}
        className=""
        display="block"
        position="relative"/>
        </div>
  )
}
