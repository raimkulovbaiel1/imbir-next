import DoctorProfilePage from "@/pages/doctor-profile/ui/DoctorProfilePage";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  console.log("Doctor ID:", id);

  return <DoctorProfilePage />;
}