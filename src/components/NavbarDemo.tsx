"use client"
import { useState } from "react"
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/Button"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center md:justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const servicesSubmenu = [
    { href: "https://www.upwork.com/freelancers/~014fabb5ea9d8ed7d8", label: "Full Stack Development" },
    { href: "https://www.upwork.com/freelancers/~014fabb5ea9d8ed7d8", label: "UI/UX Design" },
    { href: "https://www.upwork.com/freelancers/~014fabb5ea9d8ed7d8", label: "3D Web Development" },
    { href: "https://www.upwork.com/freelancers/~014fabb5ea9d8ed7d8", label: "Cloud Services (AWS, Azure, etc.)" },
  ]

  return (
    <div className={cn("top-10 inset-x-0 max-w-2xl z-50", className)}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              {servicesSubmenu.map((item) => (
                <HoveredLink key={item.label} href={item.href} target="_blank">
                  {item.label}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="block py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="py-2">
                <h3 className="mb-2 text-lg font-semibold">Services</h3>
                {servicesSubmenu.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    target="_blank" 
                    className="block py-2 pl-4 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

