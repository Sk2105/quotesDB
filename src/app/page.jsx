import Image from "next/image";
import IntroPage from "./components/IntroPage";
import Routers from "./components/Routers";
import GuidePage from "./components/GuidePage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white justify-center min-h-screen">

      <IntroPage />  
      <Routers />
      <GuidePage />
      <AboutPage />
      <Footer />


    </div>

  )
}