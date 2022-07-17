const features = [
  {
    name: "Front End Developer & UI/UX Designer, OKK UI",
    description:
      "OKK UI is an orientation program for new students of the University of Indonesia.\nAs a UI/UX designer, I was responsible to :\n1. Design high fidelity wireframes for OKK UI's website to hand off to the developers.\n2. Maintain up-to-date information regarding OKK UI through the website design.\nSkill : Visual Design, Figma, Adobe Illustrator\nAs a front-end developer, I was responsible to :\n1. Build OKK UI's website in Tailwind CSS and Javascript.\n2. Developing the UI for OKK UI's Website from the high fidelity wireframes.\nSkill : JavaScript, Tailwind CSS, React.js, HTML"
  },
  {
    name: "Visual Designer, COMPFEST",
    description:
      "1. Created and planned designs for publication purposes on every COMPFEST’s social media, such as Instagram, LinkedIn, Twitter, LINE, etc.\n2. Illustrated design following requests from other divisions.\nSkill : Visual Design, Figma, Adobe Illustrator"
  },
  {
    name: "Vice President of Supervisory Commission, DPM Fasilkom UI",
    description:
      "Carry out the supervisory function of BEM UI by DPM UI. Communicate with organizations in Fasilkom such as RISTEK, FUKI, BEM, and others."
  },
  {
    name: "Staff of Documentation and Operational, EDUCARE",
    description:
      "Setting up a zoom meeting and recording the meeting. Collaborate with events and marketing divisions for podcast activities and editing the podcast.\nSkill : Adobe Premiere Pro"
  },
  {
    name: "Intern at Deputy of Business and Partnership Bureau, BEM Fasilkom UI",
    description:
      "Learn the tasks and workings of the Business and Partnership Bureau. Contribute to work on the task of website development by designing high-fidelity wireframes for the website according to client requests.\nSkill : Figma"
  },
  {
    name: "Internship Trainee at Multimedia Bureau, BEM UI",
    description:
      "Learn the work path of the Multimedia Bureau and contribute to providing new ideas and suggestions in developing the work program."
  },
];

export default function Experiences() {
  return (
    <>
      <div id="experiences" className="mb-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center py-3 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Experiences
            </p>
          <div className='rounded-xl'>
            {features.map((feature) => (
              <div key={feature.name} className="relative mt-4 bg-underlineOrange overflow-hidden border items-center py-2 px-2 select-none cursor-pointer rounded-md">
                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                <div className="h-12 w-full pl-5 pr-7 flex items-center max-h-full">
                  <h1 className='xl:text-md font-bold md:text-lg'>
                    {feature.name}
                  </h1>
                </div>
                <div className="absolute top-5 right-3 transition-transform duration-200 rotate-0 peer-checked:-rotate-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="overflow-hidden rounded-lg bg-[#F2F4F6] transition-all duration-500 max-h-0 peer-checked:max-h-full">
                  <div className="p-5 border-t whitespace-pre-wrap">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
