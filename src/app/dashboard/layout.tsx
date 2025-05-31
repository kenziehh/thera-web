import { Sidebar } from "@/components/sidebar";
import { AuthService } from "@/features/auth/services/auth.service";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const profile = await AuthService.getProfile();

  return (
    <div className="min-h-screen bg-[#F2F2F2] w-full">
      <Sidebar user={profile} />
      <main className="text-black pl-0 md:pl-[30vh] xl:pl-[30vh] 2xl:pl-[40vh] min-h-screen transition-all duration-300 w-full">
        <div className="p-6 md:p-8 flex flex-col gap-">
          <div className="w-full py-8">
            <h2 className="text-h4 text-black">
              Selamat Datang, {profile.full_name}
            </h2>
          </div>
          <div className="py-6">{children}</div>
        </div>
      </main>
    </div>
  )
}
