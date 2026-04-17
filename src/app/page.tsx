import {Header} from "../widgets/Header/ui/Header"
import {Hero} from "../widgets/Hero/ui/hero"
import {Categories} from "../widgets/Categories/ui/Categories"; 
export default function Home() {
  return (
    <main>  
      <Header/> 
       <Hero /> 
       <Categories/>
    </main>
  );
}
