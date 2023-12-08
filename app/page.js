import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ImageGallery from './components/ImageGallery'
import EmailSection from './components/EmailSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
      </div>
      <div id= '#gallery'>
          <ImageGallery />
      </div>
      <div id= '#connect'>
        <EmailSection />
      </div>
    </main>
  )
}
