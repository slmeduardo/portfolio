import Footer from "@/components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function about() {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 text-gray-500">
      <Header />
      <section className="mx-96 my-32">
        <div>
          <h1 className="text-7xl text-gray-700 dark:text-gray-300 font-bold">
            About
          </h1>
          <p className="mt-5 dark:text-gray-400 text-xl">
            get to know me better.
          </p>
        </div>
        <div className="mt-7">
          <Image
            src="/assets/imgs/me.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p className="text-md text-gray-700 dark:text-gray-300">
            Developer with experience in web applications. I am passionate about
            the universe of technology, innovation and the creation of products
            that generate quality of life for people. In addition, I have
            studied and practiced programming for 2 years and I intend to pursue
            this career because I truly believe that a good future depends on
            technology.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
