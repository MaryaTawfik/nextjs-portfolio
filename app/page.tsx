import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid  from "@/components/Grid";
// import Recentpro from "@/components/Recentprojects";
import Recentprojects from "@/components/Recentprojects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approch from "@/components/Approch"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main
      className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5
     "
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        
        <Recentprojects />
        <Clients/>
        <Experience/>
        <Approch/>
        <Footer/>
      </div>
    </main>
  );
}
