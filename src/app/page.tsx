import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <Projects />
        <Process />
      </main>
      <Footer />
    </>
  );
}
