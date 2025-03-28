import SideMenu from '@/components/side-menu'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  if (!data || !data.user) redirect('/login')
  return (
    <div className="grid grid-cols-[350px_auto] mx-8 gap-11">
      <SideMenu />
      {children}
    </div>
  )
}
