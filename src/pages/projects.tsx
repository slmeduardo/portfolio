import Header from "../components/Header"

export default function Home() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 h-screen text-gray-500">
      <Header />
      <section className="mx-10 my-32">
        <div>
          <h1 className="text-6xl text-gray-700 dark:text-gray-300 font-bold">
            Projects
          </h1>
          <p className="mt-5 dark:text-gray-400">showcase of my work</p>
        </div>
      </section>
      <section></section>
    </div>
  )
}
