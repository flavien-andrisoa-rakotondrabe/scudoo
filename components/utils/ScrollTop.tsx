"use client";

import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  if (!isVisible) return;

  return (
    <div className="fixed bottom-2 right-2">
      <div
        className="w-12 h-12 flex justify-center items-center bg-linear-to-r from-[#3e090a] to-[#d11f22] text-white rounded-full cursor-pointer hover:opacity-90"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="size-8"
        >
          <path
            d="M7.03 9.96997H11.03V18.89L13.04 18.92V9.96997H17.03L12.03 4.96997L7.03 9.96997Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
