import Footer from "@/components/Footer"
import Header from "../components/Header"
import ProjectInfo from "@/components/ProjectInfo"

export default function projects() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 text-gray-500">
      <Header />
      <section className="mx-96 my-32">
        <div>
          <h1 className="text-7xl text-gray-700 dark:text-gray-300 font-bold">
            Projects
          </h1>
          <p className="mt-5 dark:text-gray-400 text-xl">showcase of my work.</p>
        </div>
        <div className="mt-20">
          <ProjectInfo />
        </div>
      </section>
      <section></section>
      <Footer />
    </div>
  )
}
