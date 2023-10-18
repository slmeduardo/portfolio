import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";

type ProjectInfoType = {
  title: String;
  subtitle: String;
  desc: String;
  link: URL;
};

export default function ProjectInfo({
  title,
  subtitle,
  desc,
  link,
}: ProjectInfoType) {
  return (
    <div className="mb-16">
      <h1 className="text-orange-400 font-semibold mb-4">{title}</h1>
      <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
        {subtitle}
      </h2>
      <p className="mt-4">{desc}</p>

      <Link href={link} target="_blank">
        <button className="text-orange-400 bg-orange-400 bg-opacity-10 font-semibold text-sm rounded-full py-2 px-5 mt-4 flex gap-2 items-center">
          learn more <TiArrowRightThick />
        </button>
      </Link>
    </div>
  );
}
