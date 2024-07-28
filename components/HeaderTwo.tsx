"use client";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

interface HeaderTwoProps {
  user?: User;
}

const HeaderTwo: React.FC<{ user: any }> = ({ user }) => {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <header className="bg-indigo-600 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex items-center justify-center py-5 lg:justify-between">
          {/* Logo */}
          <div className="absolute left-0 flex-shrink-0 lg:static">
            <a className="flex" href="#">
              <span className="sr-only">Mody</span>
              <span>
                <svg fill="#A5B4FC" height="42" viewBox="0 0 32 32" width="52" xmlns="http://www.w3.org/2000/svg">
                  <g id="Layer_2" data-name="Layer 2">
                    <path d="m27 4h-22a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h17.764l5.789 2.9a1 1 0 0 0 1.447-.9v-21a3 3 0 0 0 -3-3zm-11 16h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm7-4h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0-4h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
                  </g>
                </svg>
              </span>
              <span className="text-indigo-200 text-4xl font-bold ml-2">Mody</span>
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
                    <DropdownItem key="edit" href="/settings">
                      Your settings
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onPress={handleLogout}>
                      Logout
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
            <div className="text-white">
              {" "}
              Hi {user?.user_metadata?.name || user?.email || "there"}, it is such a lovely day to create a modal!
            </div>
            <div className="col-span-2 text-right">
              <Link
                href="/modals"
                className="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-10"
              >
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
