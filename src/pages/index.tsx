import { IoDocumentTextOutline } from "react-icons/io5";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVisualstudiocode,
  SiStyledcomponents,
  SiFigma,
} from "react-icons/si";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const gitHubURL = new URL("https://github.com/slmeduardo");

export default function Home() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 text-gray-500">
      <Header />
      <section className="mx-96 my-32">
        <div>
          <h3 className="text-2xl dark:text-gray-400">Hello Folks! 👋</h3>
          <h1 className="text-6xl text-gray-700 dark:text-gray-300 font-bold">
            I'm <span className="text-orange-500">Eduardo</span> Cardoso,
          </h1>
          <p className="mt-5 dark:text-gray-400">
            a passionate front-end developer from Brazil.
          </p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-400 px-6 py-3 rounded-xl mt-10 font-semibold text-gray-200">
          Get in touch
        </button>
        <div className="flex mt-3 gap-1 items-center font-semibold">
          <IoDocumentTextOutline size={20} />
          <p>Curriculum</p>
        </div>
        <div className="mt-32">
          <p>experience with:</p>
          <div className="flex gap-3 mt-3 dark:text-gray-400">
            <div className="hover:text-[#26D9FD]">
              <SiReact size={25} />
            </div>
            <div className="hover:text-[#2F74C0]">
              <SiTypescript size={25} />
            </div>
            <div className="hover:text-[#01B7D6]">
              <SiTailwindcss size={25} />
            </div>
            <div className="hover:text-[#F7CC5C]">
              <SiStyledcomponents size={30} />
            </div>
            <div className="dark:hover:text-white hover:text-black border-r pr-3">
              <SiNextdotjs size={25} />
            </div>
            <div className="hover:text-[#0071B2]">
              <SiVisualstudiocode size={25} />
            </div>
            <div className="hover:text-[#EA4C1D]">
              <SiFigma size={25} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
