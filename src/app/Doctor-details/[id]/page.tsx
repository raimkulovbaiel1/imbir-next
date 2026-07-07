import { notFound } from "next/navigation";

import { doctorDetailsData } from "@/entities/Doctor-details/model/doctor-details.data";
import DoctorDetails from "@/widgets/Doctor-details/ui/DoctorDetails";

interface DoctorDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DoctorDetailsPage = async ({
  params,
}: DoctorDetailsPageProps) => {
  const { id } = await params;

  const doctor = doctorDetailsData.find(
    (item) => item.id === Number(id)
  );

  if (!doctor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EEEEEE] px-3 py-5 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1150px]">
        <DoctorDetails doctor={doctor} />
      </div>
    </main>
  );
};

export default DoctorDetailsPage;