import Footer from "@/components/Footer";
import Header from "../components/Header";
import ProjectInfo, { ProjectInfoType } from "@/components/ProjectInfo";

const projectsDetails: ProjectInfoType[] = [
  {
    title: "portfolio",
    subtitle: "A website about my professional life",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus ullam minima inventore blanditiis aliquid et qui cumque dolorum, eius sequi voluptate deleniti dignissimos voluptatum voluptatibus praesentium excepturi sapiente totam.",
    link: `${process.env.NEXT_PUBLIC_GITHUB_URL}/portfolio`,
  },
  {
    title: "Drift4U",
    subtitle: "A page to control car sales",
    desc: "Drift4U is a website created to control sales advertisements and make car purchases online. Built with HTML, TailwindCSS and JS, the project has the function of creating, editing and deleting car ads when accessing your account. I did this project to improve my knowledge of REST API and its concepts.",
    link: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Drift4U`,
  },
  {
    title: "Dogs",
    subtitle: "A social media for pets",
    desc: "My first project entirely in ReactJS. Dogs is an online social network for sharing photos and videos for pet owners to post their pets, developed step by step using the course classes, with the aim of learning how to use the framework.",
    link: `${process.env.NEXT_PUBLIC_GITHUB_URL}/docs`,
  },
  {
    title: "Resulta.ai",
    subtitle: "A Counter-Strike website that covers all brazilian matches",
    desc: "Resulta.ai is a website that lists the next and latest results of Brazilian CSGO team matches, being my first project using NextJs and Styled Components technologies, I built it with the aim of improving my knowledge with REST API and Typescript for clean code development, I also used the ServerSideProps method to create the API used in the application.",
    link: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Resulta.ai`,
  },
];

export default function projects() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 text-gray-500 bg-grid-red-500">
      <Header />
      <section className="mx-96 my-32">
        <div>
          <h1 className="text-7xl text-gray-700 dark:text-gray-300 font-bold">
            Projects
          </h1>
          <p className="mt-5 dark:text-gray-400 text-xl">
            showcase of my work.
          </p>
        </div>
        <div className="mt-20">
          {projectsDetails.map((item) => (
            <ProjectInfo key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section></section>
      <Footer />
    </div>
  );
}
