import ProfileTabs from "@/widgets/Profile-tabs/ui/ProfileTabs";

export default function Page() {
  return (  
    <main className="min-h-screen bg-[#FFFFFF] py-6 lg:py-10">
      <div className="mx-auto w-full max-w-[1220px] px-4">
        <ProfileTabs />
      </div>
    </main>
  );
}
