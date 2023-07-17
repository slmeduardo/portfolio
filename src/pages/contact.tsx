import Footer from "@/components/Footer"
import Header from "../components/Header"
import ProjectInfo from "@/components/ProjectInfo"

export default function contact() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 text-gray-500">
      <Header />
      <section className="mx-96 my-32">
        <div>
          <h1 className="text-7xl text-gray-700 dark:text-gray-300 font-bold">
            Contact
          </h1>
          <p className="mt-5 dark:text-gray-400 text-xl">get in touch with me.</p>
        </div>
        <div>
        <div className="my-12 border-l border-gray-400 opacity-50">
          <p>It will be wonderful to connect with you! If you're interested in getting in touch with me, there are several convenient ways to do so:</p>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
