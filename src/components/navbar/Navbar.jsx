import React from "react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="bg-white w-full sticky top-0 z-40 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/logo.webp"
            className="h-10"
            alt="salesgear"
            loading="lazy"
          />
        </div>
        <div
          className="flex space-x-3 md:space-x-0 rtl:space-x-reverse"
          onClick={() => setOpen((prev) => !prev)}
        >
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            open ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
            <li className="under-line cursor-pointer">Platform</li>
            <li className="under-line cursor-pointer">Pricing</li>
            <li className="under-line cursor-pointer">About</li>
            <li className="under-line cursor-pointer">Resources</li>
            <button className="p-[10px] btn-secondary block md:hidden">
              Log In
            </button>
            <button className="p-[10px] rounded-md btn-primary block md:hidden">
              Get Started
            </button>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button className="p-[10px] btn-secondary">Log In</button>
          <button className="p-[10px] rounded-md btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
