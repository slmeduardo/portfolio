import {
  SiTwitter,
  SiGithub,
} from "react-icons/si"

export default function Footer() {
return (
    <footer className="mx-96 mt-32">
        <p className="text-gray-400 text-sm font-bold">About Me</p>
        <p className="dark:text-gray-200 text-sm mt-3 max-w-sm">I am Eduardo Cardoso, a <span className="font-bold">front-end developer</span> with a genuine passion for clean and modern design.</p>
        <div className="flex gap-3 mt-5">
          <SiTwitter className="text-black dark:text-white" size={25} cursor="pointer" />
          <SiGithub className="text-black dark:text-white" size={25} cursor="pointer" />
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-gray-400 opacity-100 dark:opacity-50" />
        <p className="text-xs font-bold pb-5">© 2023, Eduardo Cardoso</p>
      </footer>
  )
}
