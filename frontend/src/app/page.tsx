import Image from 'next/image'
// import styles from './page.module.css'
// import styles from './styles.module.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Wallets from './components/Wallets'
import TopSeller from './components/TopSellers'
import TrendingNFT from './components/TrendingNFT'
import Footer from './components/Footer'

export default function Home() {
  return (
      <main style={{'position': 'absolute'}}>
        <Header />
        <Slider />
        <Wallets />
        <TopSeller />
        <TrendingNFT />
        <Footer />
        
      </main>
  )
}
