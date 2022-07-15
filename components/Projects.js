export default function Projects() {
  return (
    <section className="relative max-w-3xl mx-auto lg:px-4 px-14 sm:px-14 lg:px-1 lg:mb-20 mb-[320px]">
        <p className="text-center py-3 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projects
        </p>
        <div className="relative mt-10">
          <div className=" p-3 mt-10 lg:max-w-xl max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-[#F2F4F6] shadow-md">
            <div className="font-semibold text-xl mb-2 ml-2 text-gray-900">OKK UI 2022</div>
            <div className="flex">
              <button className="transform mouse-pointer bg-indigo-600 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                <a href="https://okk.ui.ac.id/" target="_blank">Live</a>
              </button>
              <button className="transform mouse-pointer bg-indigo-600 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                  <a href="https://github.com/aidanazkafaro/okk-ui-2022-frontend" target="_blank">Code</a>
              </button>
            </div>
            <div className="my-2 mx-2 mr-5">
              <p className="text-gray-900 text-sm">
                The OKK UI website provides important information for new students as an orientation program of University of Indonesia
              </p>
            </div>
            <div>
              <div className="mx-2 font-semibold text-l text-gray-900">Tech Stack:</div>
              <div className="mx-2">
                  <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-50 rounded px-1 py-1 text-xs font-thin hover:shadow-sm  hover:scale-105">NextJS</span>
                <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-50 rounded px-1 py-1  text-xs font-thin hover:shadow-sm  hover:scale-105">Tailwind</span>
                <span className="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin hover:shadow-sm  hover:scale-105">Javascript</span>
              </div>
            </div>
          </div>
              <img
            className="flex absolute lg:mx-[510px] lg:-my-56 lg:h-64 w-[300px] object-cover object-top transform hover:scale-105 border flex my-2 items-center p-1 select-none cursor-pointer rounded-md transition-all duration-100"
            src="/projects/okkui.png">
          </img>
        </div>
    </section>
  );
}
