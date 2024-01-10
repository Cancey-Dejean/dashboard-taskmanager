import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import SidebarNav from "@/components/SidebarNav"
import TopBar from "@/components/TopBar"
import SidebarHeader from "@/components/SidebarHeader"
import MemberCircle from "@/components/MemberCircle"
import { PlusIcon } from "@/components/Icons"
import ActivityCard from "@/components/Card/ActivityCard"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Sidebar */}
        <SidebarNav />

        <main>
          <TopBar />

          <div className="flex gap-6 py-5 px-6 h-full">
            <div className="flex-1">
              <div className="bg-transparent h-full ">{children}</div>
            </div>

            <div className="bg-white max-w-[416px] w-full h-fit rounded-[10px] py-5 px-6">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <SidebarHeader title="Teams" />

                  <div className="flex gap-3">
                    <div className="flex gap-3 flex-wrap">
                      <MemberCircle />
                      <MemberCircle />
                      <MemberCircle />
                      <MemberCircle />
                    </div>
                    <button className="h-16 w-16 flex items-center justify-center border border-black rounded-full shrink-0">
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4 ">
                  <SidebarHeader title="Activities" />
                  <div className="flex flex-col gap-5">
                    <ActivityCard
                      userName="James Throne"
                      text="Lorem ipsum dolor sit amet consectetur. Arcu tempor facilisis enim cursus cras at pulvinar quam aliquam. Eget egestas sit Eget egestas sit."
                    />
                    <ActivityCard text="Lorem ipsum dolor sit amet consectetur. Arcu tempor facilisis enim cursus cras at pulvinar quam aliquam. Eget egestas sit Eget egestas sit." />
                    <ActivityCard text="Lorem ipsum dolor sit amet consectetur. Arcu tempor facilisis enim cursus cras at pulvinar quam aliquam. Eget egestas sit Eget egestas sit." />
                    <ActivityCard
                      userName="James Throne"
                      text="Lorem ipsum dolor sit amet consectetur. Arcu tempor facilisis enim cursus cras at pulvinar quam aliquam. Eget egestas sit Eget egestas sit."
                    />
                    <ActivityCard text="Lorem ipsum dolor sit amet consectetur. Arcu tempor facilisis enim cursus cras at pulvinar quam aliquam. Eget egestas sit Eget egestas sit." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
