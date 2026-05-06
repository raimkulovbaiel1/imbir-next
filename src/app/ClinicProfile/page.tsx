import ClinicProfile from "@/widgets/ClinicProfile/ui/ClinicProfile";
import ClinicServices from "@/widgets/ClinicServices/ui/ClinicServices"; 
import Specialists from "@/widgets/Specialists/ui/Specialists"; 
import Specialistssearch from "@/features/Specialists-search/ui/Specialists";

export default function Home() {
  return <><ClinicProfile />
    <ClinicServices /> 
    <Specialistssearch/>  
    <Specialists/> 
    </>;
}