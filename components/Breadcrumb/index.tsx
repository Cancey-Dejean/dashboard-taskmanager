import Link from "next/link"

const breadcrumbLinks = [
  {
    href: "../../../..",
    label: "Dashboard",
  },
  {
    href: "../../../",
    label: "Board",
  },
  {
    href: "../../",
    label: "List Tasks",
    current: true,
  },
]

type BreadcrumbProps = {
  links: {
    href: string
    label: string
    current?: boolean
  }[]
}

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="list-none flex">
        {breadcrumbLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
