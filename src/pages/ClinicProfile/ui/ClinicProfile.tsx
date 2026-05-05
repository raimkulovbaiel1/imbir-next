import ClinicProfile from "@/widgets/ClinicProfile/ui/ClinicProfile";
import { ClinicServices } from "@/widgets/ClinicServices/ui/ClinicServices";

export const ClinicProfilePage = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-280"   >
        <ClinicProfile /> 
        <ClinicServices/>
      </div>
    </section>
  )
}
