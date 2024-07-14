"use client";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

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
                <Dropdown>
                  <DropdownTrigger>
                    {/* <Button variant="bordered">Open Menu</Button> */}
                    <button
                      type="button"
                      className="relative flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
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
            <div className="text-white">Hi username, such a lovely day to create a modal!</div>
            <div className="col-span-2 text-right">
              <Link href="/" className="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-10">
                Home
              </Link>
              <Link
                href="/settings"
                className="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-10"
              >
                Settings
              </Link>
            </div>
            <div>{/* Mobile search */}</div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
    </header>
  );
};

export default HeaderTwo;
