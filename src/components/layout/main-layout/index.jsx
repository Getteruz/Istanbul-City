import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'

export default function MainLayout({ children }) {
  return (
      <>
      <Header />
         {children}
        <Footer/>
    </>
  )
}
