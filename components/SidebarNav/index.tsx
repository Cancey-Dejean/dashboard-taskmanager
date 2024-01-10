"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import {
  HomeIcon,
  InfoIcon,
  LoginIcon,
  Logo,
  MessageSquare,
  SettingsIcon,
  TrendingDown,
  UsersIcon,
} from "../Icons"

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Statistics",
    href: "/statistics",
    icon: <TrendingDown />,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: <MessageSquare />,
  },
  {
    name: "Users",
    href: "users",
    icon: <UsersIcon />,
  },
  {
    name: "Settings",
    href: "#",
    icon: <SettingsIcon />,
  },
  {
    name: "Info",
    href: "#",
    icon: <InfoIcon />,
  },
  {
    name: "Log in",
    href: "#",
    icon: <LoginIcon />,
  },
]

const SidebarNav = ({}: {}) => {
  const path = usePathname()
  return (
    <div className="fixed top-0 left-0 w-[146px] h-full border-r border-r-[#EFEFEF]">
      <div className="flex h-full flex-col gap-y-10 py-8 overflow-y-auto bg-white pb-4 items-center">
        <div className="flex">
          <Logo />
        </div>

        <nav className="w-full">
          <ul role="list" className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={twMerge(
                    "py-6 px-12 relative flex items-center justify-center",
                    "[&_svg_path]:hover:stroke-[#0075ff] [&_svg_path]:transition-all [&_svg_path]:duration-300 [&_svg_path]:ease-in-out",
                    path === item.href
                      ? "before:content-[''] before:absolute before:bg-[#0075ff] before:h-full before:w-1 before:top-0 before:left-0 [&_svg_path]:stroke-[#0075ff]"
                      : "bg-transparent"
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SidebarNav
