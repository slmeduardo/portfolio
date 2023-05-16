import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { BsFillSunFill, BsFillMoonStarsFill, BsGithub } from "react-icons/bs"
import Link from "next/link"

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <header className="flex justify-between dark:text-gray-300 p-5 items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold cursor-pointer">
          <Link href="/">
            edzin
            <span className="text-orange-500">dev</span>
          </Link>
        </h1>
        <ul className="text-orange-500 text-xs font-semibold flex ml-5 gap-5">
          <li className="hover:text-orange-400 cursor-pointer">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="p-3">
          <BsGithub size={20} />
        </div>
        <button>
          {currentTheme === "dark" ? (
            <button className="p-3" onClick={() => setTheme("light")}>
              <BsFillSunFill size={20} />
            </button>
          ) : (
            <button className="p-3" onClick={() => setTheme("dark")}>
              <BsFillMoonStarsFill size={20} color="black" />
            </button>
          )}
        </button>
      </div>
    </header>
  )
}