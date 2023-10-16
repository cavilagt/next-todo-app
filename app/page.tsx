import Image from 'next/image'
import styles from './page.module.css'
import { Todos } from './components/Todos'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Todos />
      </div>
    </main>
  )
}
