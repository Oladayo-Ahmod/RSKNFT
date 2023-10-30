import Image from 'next/image'
// import styles from './page.module.css'
// import styles from './styles.module.css'
import CreatePageHeader from '../components/CreatePageHeader'
import CreatePageSubHeader from '../components/CreatePageSubHeader'
import Footer from '../components/Footer'
import CreatePageContent from '../components/CreatePageContent'

export default function Create() {
  return (
      <main >
        <CreatePageHeader />
        <CreatePageSubHeader />
        <CreatePageContent />
        <Footer />
        
      </main>
  )
}
