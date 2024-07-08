import React from "react";

const HeaderTwo: React.FC = () => {
  return (
    <header className="bg-indigo-600 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex items-center justify-center py-5 lg:justify-between">
          {/* Logo */}
          <div className="absolute left-0 flex-shrink-0 lg:static">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
            </a>
          </div>

          {/* Right section on desktop */}
          <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              {/* Icon placeholder */}
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-4 flex-shrink-0">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              {/* Dropdown menu */}
            </div>
          </div>

          {/* Search */}
          <div className="min-w-0 flex-1 px-12 lg:hidden">
            <div className="mx-auto w-full max-w-xs">{/* Search input */}</div>
          </div>

          {/* Menu button */}
          <div className="absolute right-0 flex-shrink-0 lg:hidden">{/* Mobile menu button */}</div>
        </div>
        <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
          <div className="grid grid-cols-3 items-center gap-8">
            <div className="col-span-2">{/* Navigation */}</div>
            <div>{/* Mobile search */}</div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
    </header>
  );
};

export default HeaderTwo;
