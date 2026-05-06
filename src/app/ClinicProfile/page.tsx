import ClinicProfile from "@/widgets/ClinicProfile/ui/ClinicProfile";
import ClinicServices from "@/widgets/ClinicServices/ui/ClinicServices"; 
import Specialists from "@/widgets/Specialists/ui/Specialists"; 
import Specialistssearch from "@/features/Specialists-search/ui/Specialists";
import ReviewsCopy from "@/widgets/ReviewsCopy/ui/ReviewsCopy";

export default function Home() {
  return <><ClinicProfile />
    <ClinicServices /> 
    <Specialistssearch/>  
    <Specialists/>  
    <ReviewsCopy/>
    </>;
}