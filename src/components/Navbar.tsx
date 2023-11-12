import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white p-3 flex justify-between items-center rounded-xl ">
      <div className="max-w-[150px]">
        <img
          className="hidden xs:block"
          src="src/assets/logo-devlinks-large.svg"
        />

        <img className="xs:hidden" src="src/assets/logo-devlinks-small.svg" />
      </div>

      <div className="flex items-center">
        <NavLink to="/account">
          {({ isActive }) => {
            return isActive ? (
              <div className="rounded-lg px-3 sm:px-5 py-2 bg-light-purple text-purple">
                <div className="flex">
                  <img
                    className="sm:mr-2"
                    src="src/assets/icon-link-purple.svg"
                  />
                  <div className="hidden sm:block">Links</div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg px-3 sm:px-5 py-2 text-grey">
                <div className="flex">
                  <img className="sm:mr-2" src="src/assets/icon-link-2.svg" />
                  <div className="hidden sm:block">Links</div>
                </div>
              </div>
            );
          }}
        </NavLink>

        <NavLink to="/profile">
          {({ isActive }) => {
            return isActive ? (
              <div className="rounded-lg px-3 sm:px-5 py-2 bg-light-purple text-purple">
                <div className="flex">
                  <img
                    className="sm:mr-2"
                    src="src/assets/icon-profile-details-header-purple.svg"
                  />
                  <div className="hidden sm:block">Profile Details</div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg px-3 sm:px-5 py-2 text-grey">
                <div className="flex">
                  <img
                    className="sm:mr-2"
                    src="src/assets/icon-profile-details-header.svg"
                  />
                  <div className="hidden sm:block">Profile Details</div>
                </div>
              </div>
            );
          }}
        </NavLink>
      </div>

      <div className="border px-3 sm:px-7 py-2 rounded-lg text-purple">
        <Link to="/">
          <div className="hidden sm:block">Preview</div>
          <div className="sm:hidden">
            <img src="src/assets/icon-preview-header.svg" />
          </div>
        </Link>
      </div>
    </nav>
  );
}
