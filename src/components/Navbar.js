import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbHomeQuestion,
  TbHomeSignal,
  TbUserScan,
  TbSend,
  TbWorldCode,
} from "react-icons/tb";

function Navbar() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [online]);

  const navLinkClassNormal =
    "px-3 pt-1.5 pb-0.5 md:px-3 md:pt-2 md:pb-2 flex flex-col md:flex-row md:gap-1.5 items-center justify-center rounded-t-xl font-semibold bg-white/5 backdrop-blur-sm transition-all duration-200 ease-in active:bg-white/85 active:text-[#16181d] hover:bg-white hover:text-[#16181d] select-none";

  const navLinkClassWide =
    "px-1.5 pt-1.5 pb-0.5 md:px-2 md:pt-2 md:pb-2 flex flex-col md:flex-row md:gap-1.5 items-center justify-center rounded-t-xl font-semibold bg-white/5 backdrop-blur-sm transition-all duration-200 ease-in active:bg-white/85 active:text-[#16181d] hover:bg-white hover:text-[#16181d] select-none";

  return (
    <header className="flex flex-col items-center justify-center sticky top-0 z-20 bg-[#16181d]">
      <nav className="px-2 pt-1.5  md:px-2.5 md:pt-2 flex items-center justify-between max-w-7xl w-full rounded-b-md text-white">
        <Link to="/" className="text-lg md:text-xl pr-2 md:px-2 py-2.5 md:py-1.5">
          I. Farhat
        </Link>
        <div className="flex gap-2 md:gap-3 items-center justify-center">
          <NavLink to="/" className={navLinkClassNormal}>
            {online ? (
              <TbHomeSignal className="text-2xl md:text-[1.35rem]" />
            ) : (
              <TbHomeQuestion className="text-2xl md:text-[1.35rem]" />
            )}
            <span className="text-xs md:text-base">Home</span>
          </NavLink>
          <NavLink to="/about" className={navLinkClassNormal}>
            <TbUserScan className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">About</span>
          </NavLink>
          <NavLink to="/projects" className={navLinkClassWide}>
            <TbWorldCode className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">Projects</span>
          </NavLink>
          <NavLink to="/contact" className={navLinkClassWide}>
            <TbSend className="text-2xl md:text-[1.35rem]" />
            <span className="text-xs md:text-base">Contact</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
