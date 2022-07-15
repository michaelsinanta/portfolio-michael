/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 Michael Christlambert Sinanta
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500" href="https://github.com/michaelsinanta">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 90 90"
              >
              <path d="M42 0C18.795 0 0 18.8116 0 42.037C0 60.6384 12.0225 76.3498 28.7175 81.9197C30.8175 82.2875 31.605 81.0264 31.605 79.9229C31.605 78.9246 31.5525 75.6141 31.5525 72.0935C21 74.0377 18.27 69.5188 17.43 67.1542C16.9575 65.9456 14.91 62.2148 13.125 61.2164C11.655 60.4283 9.555 58.484 13.0725 58.4315C16.38 58.3789 18.7425 61.4792 19.53 62.7403C23.31 69.0984 29.3475 67.3118 31.7625 66.2083C32.13 63.4759 33.2325 61.6368 34.44 60.5859C25.095 59.535 15.33 55.9093 15.33 39.8301C15.33 35.2586 16.9575 31.4752 19.635 28.5326C19.215 27.4817 17.745 23.1729 20.055 17.3928C20.055 17.3928 23.5725 16.2894 31.605 21.7016C34.965 20.7558 38.535 20.2829 42.105 20.2829C45.675 20.2829 49.245 20.7558 52.605 21.7016C60.6375 16.2368 64.155 17.3928 64.155 17.3928C66.465 23.1729 64.995 27.4817 64.575 28.5326C67.2525 31.4752 68.88 35.206 68.88 39.8301C68.88 55.9618 59.0625 59.535 49.7175 60.5859C51.24 61.8995 52.5525 64.4218 52.5525 68.3627C52.5525 73.9852 52.5 78.5042 52.5 79.9229C52.5 81.0264 53.2875 82.3401 55.3875 81.9197C63.7251 79.1022 70.9701 73.7389 76.1028 66.5845C81.2355 59.43 83.9975 50.8448 84 42.037C84 18.8116 65.205 0 42 0Z"/>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://gitlab.com/michaelsinanta">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 90 90"
              >
              <path d="M17.6704 1.18241C17.1497 -0.312512 15.0333 -0.312512 14.4958 1.18241L5.00555 30.5433H27.1774C27.1606 30.5433 17.6704 1.18241 17.6704 1.18241V1.18241ZM0.151258 45.3246C-0.285461 46.6683 0.201649 48.1633 1.34384 49.0199L42.9833 79.9262L4.98876 30.5433L0.151258 45.3246ZM27.1606 30.5433L43.0001 79.9262L58.8395 30.5433H27.1606ZM85.8489 45.3246L81.0114 30.5433L43.0001 79.9262L84.6395 49.0199C85.7985 48.1633 86.2688 46.6683 85.8489 45.3246V45.3246ZM71.5044 1.18241C70.9837 -0.312512 68.8673 -0.312512 68.3298 1.18241L58.8227 30.5433H80.9946L71.5044 1.18241Z"/>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://www.instagram.com/michaelcs_564/">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/michaelsinanta/">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}