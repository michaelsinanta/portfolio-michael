/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Experiences", href: "/#experiences" },
  { name: "Skills", href: "/#skills" },
  { name: "Project", href: "/#projects" },
];

export default function Hero() {
  return (
    <div id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-[196px]">
          <div className="relative pt-6 lg:h-[50px] h-20"></div>  
          
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
    
          <main className="mx-auto max-w-7xl px-4 mt-[50px] sm:px-6 md:mt-16 lg:-mt-4 lg:px-5">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:pt-[130px]">
                <span className="block xl:inline">
                  Hello, my name is{" "}
                </span>{" "}
                <span className="block text-indigo-600 xl:inline text-[50px]">
                  Michael Christlambert Sinanta
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Hello! &#128075; My name is Michael, and I’m a computer science student at the University of Indonesia. 
                I have a passion for Data Science, Artificial Intelligence, and Software Engineering (Web & Mobile Development). 
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <a
                    href="https://drive.google.com/file/d/1xmehGsWVLElbY5ksmtaG01VIyXZKhQli/view?usp=sharing" target="_blank"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    <img src="/assets/download.svg" alt="download" />
                    <p>&nbsp;&nbsp;&nbsp;Download CV</p>
                  </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/assets/FotoDiri.png"
          alt="foto_michael"
        />
      </div>
    </div>
  );
}
