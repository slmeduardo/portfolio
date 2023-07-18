import Footer from "@/components/Footer";
import Header from "../components/Header";
import ProjectInfo from "@/components/ProjectInfo";

import { CiShare1 } from "react-icons/ci";
import Link from "next/link";

export default function contact() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 text-gray-500">
      <Header />
      <section className="mx-96 my-32">
        <div>
          <h1 className="text-7xl text-gray-700 dark:text-gray-300 font-bold">
            Contact
          </h1>
          <p className="mt-5 dark:text-gray-400 text-xl">
            get in touch with me.
          </p>
        </div>
        <div>
          <div className="my-12 pl-24 border-l border-gray-400 max-w-3xl border-opacity-30">
            <p className="text-md text-gray-700 dark:text-gray-300">
              It will be wonderful to connect with you! If you're interested in
              getting in touch with me, there are several convenient ways to do
              so:
            </p>
            <div className="my-12 flex-grow border-t border-gray-400 opacity-30"></div>
            <h1 className="text-3xl text-gray-700 dark:text-gray-300 font-bold">
              Contact
            </h1>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Email
                    </th>
                    <td className="px-6 py-4">eduardoslmc87@gmail.com</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Phone
                    </th>
                    <td className="px-6 py-4">+55 34 996321220</td>
                  </tr>
                </tbody>
              </table>

              <div className="my-12 flex-grow border-t border-gray-400 opacity-30"></div>

              <h1 className="text-3xl text-gray-700 dark:text-gray-300 font-bold">
                Social Media
              </h1>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                      Social Media
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Linkedin
                    </th>
                    <td className="px-6 py-4">
                      <Link
                        target="_blank"
                        className="flex gap-1 items-center text-blue-500 hover:text-blue-300"
                        href="https://www.linkedin.com/in/eduardo-cardoso-46695a238/m"
                      >
                        https://www.linkedin.com/in/eduardo-cardoso-46695a238/m
                        <CiShare1 size={20} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Twitter
                    </th>
                    <td className="px-6 py-4">
                      <Link
                        target="_blank"
                        className="flex gap-1 items-center text-blue-500 hover:text-blue-300"
                        href="https://twitter.com/slmeduardo"
                      >
                        https://twitter.com/slmeduardo
                        <CiShare1 size={20} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Instagram
                    </th>
                    <td className="px-6 py-4">
                      <Link
                        target="_blank"
                        className="flex gap-1 items-center text-blue-500 hover:text-blue-300"
                        href="https://www.instagram.com/eduardoscardoso1/"
                      >
                        https://www.instagram.com/eduardoscardoso1/
                        <CiShare1 size={20} />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
