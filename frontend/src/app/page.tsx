import Image from 'next/image'
// import styles from './page.module.css'
// import styles from './styles.module.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Wallets from './components/Wallets'

export default function Home() {
  return (
      <main>
        <Header />
        <Slider />
        <Wallets />
        
      </main>
  )
}
