/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { TechStacksData } from './TechStacksData';

export default function TechSkills() {
  return (
    <>
      <section id="skills" className="relative mb-12 py-2 text-gray-600 body-font lg:mx-40 sm:mx-1 sm:px-6 lg:px-8">
        <p className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Skills
        </p> <br></br>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1'>
            {TechStacksData.map((tech, index) => {
              return (
              <div key={index} className='border flex my-2 items-center py-2 px-6 select-none cursor-pointer rounded-md'>
                <Image src={tech.image} width={18} height={18} alt='/'/>
                <div className='text-center text-secondary font-semibold ml-3'>
                    <h3>{tech.title}</h3>
                </div>
              </div>
              )
            })}
          </div>
      </section>
    </>
  );
}
