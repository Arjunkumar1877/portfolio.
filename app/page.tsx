import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Describe from "../components/ui/Describe";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";


export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="mx-w-7xl w-full">
      <FloatingNav navItems={navItems} />
     <Hero />
     <Grid />
     <RecentProjects />
     <Describe /> 
     <Experience />
     <Connect />
     <Footer />
    </div>
  </main>
  );
}
