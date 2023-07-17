import {
  TiArrowRightThick
} from "react-icons/ti"

export default function ProjectInfo() {
return (
    <div className="">
        <h1 className="text-orange-400 font-semibold mb-4">portfolio</h1>
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">A website about my professional life</h2>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus ullam minima inventore blanditiis aliquid et qui cumque dolorum, eius sequi voluptate deleniti dignissimos voluptatum voluptatibus praesentium excepturi sapiente totam.</p>
        
        <button className="text-orange-400 bg-orange-400 bg-opacity-10 font-semibold text-sm rounded-full py-2 px-5 mt-4 flex gap-2 items-center">learn more <TiArrowRightThick /></button>
    </div>
  )
}