import React from "react";
// import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className=" bg-blue-200 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <div >
            {/* Logo */}
            {/* <Link to="/" className="flex items-center"> */}
            <a href=""className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width="100" height="20">
 
  <rect width="100" height="20" fill="#0077B5" />
 
  <text x="10" y="14" font-family="Arial, sans-serif" font-size="14" fill="#FFFFFF">Linked</text>
</svg></a>
            {/* </Link> */}
          </div>
          <div>//Nav items</div>
          <div>//Buttons</div>
        </div>
      </nav>
    </header>
  );
}
