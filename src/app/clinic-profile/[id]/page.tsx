import { ClinicProfilePage } from "@/pages/ClinicProfile/ui/ClinicProfile";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  console.log("Clinic ID:", id);

  return <ClinicProfilePage />;
}