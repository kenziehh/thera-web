import { Sidebar, SidebarInset, SidebarProvider } from "../../components/ui/sidebar";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Sidebar >
      </Sidebar>
      <SidebarInset className="p-4">
        {children}
      </SidebarInset>
      <Sidebar
        collapsible="none"
        className="sticky top-0 hidden h-svh border-l lg:flex"
      >

      </Sidebar>
    </SidebarProvider>
  )
}
