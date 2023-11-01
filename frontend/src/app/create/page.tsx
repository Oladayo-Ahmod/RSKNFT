import Image from 'next/image'
// import styles from './page.module.css'
// import styles from './styles.module.css'
import CreatePageSubHeader from '../components/CreatePageSubHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreatePageContent from '../components/CreatePageContent'
import CreatePageHeader from '../components/CreatePageHeader'

export default function Create() {
  return (
      <main >
        {/* <CreatePageHeader /> */}
        <Header />
        <CreatePageSubHeader />
        <CreatePageContent />
        <Footer />
        
      </main>
  )
}
