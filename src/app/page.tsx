import {Header} from "../widgets/Header/ui/Header"
import {Hero} from "../widgets/Hero/ui/hero"
import {Categories} from "../widgets/Categories/ui/Categories"; 
import MedicalCards from "@/widgets/MedicalCards/ui/MedicalCards"; 
import ProjectVideo from "../widgets/ProjectVideo/ui/ProjectVideo"
export default function Home() {
  return (
    <main>  
      <Header/> 
       <Hero /> 
       <Categories/> 
       <MedicalCards/> 
       <ProjectVideo/>
    </main>
  );
}
