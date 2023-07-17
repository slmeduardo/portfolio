import Link from "next/link"
import {
  SiTwitter,
  SiGithub,
  SiLinkedin
} from "react-icons/si"

export default function Footer() {
return (
    <footer className="mx-96 mt-32">
        <p className="text-gray-400 text-sm font-bold">About Me</p>
        <p className="dark:text-gray-200 text-sm mt-3 max-w-sm">I am Eduardo Cardoso, a <span className="font-bold">front-end developer</span> with a genuine passion for clean and modern design.</p>
        <div className="flex gap-3 mt-5">
          <Link href={"https://twitter.com/slmeduardo"} target="_blank">
            <SiTwitter className="text-black dark:text-white" size={25} cursor="pointer" />
          </Link>
          <Link href={"https://github.com/slmeduardo"} target="_blank">
            <SiGithub className="text-black dark:text-white" size={25} cursor="pointer" />
          </Link>
          <Link href={"https://www.linkedin.com/in/eduardo-cardoso-46695a238/"} target="_blank">
            <SiLinkedin className="text-black dark:text-white" size={25} cursor="pointer" />
          </Link>
        </div>
      <div className="my-12 flex-grow border-t border-gray-400 opacity-50"></div>
      <p className="text-xs font-bold pb-5">© 2023, Eduardo Cardoso</p>
      </footer>
  )
}
