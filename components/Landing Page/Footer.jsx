import React from "react";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Athena Advisory Solutions Limited
            </h3>
            <p>
              Leading the way in cloud solutions and IT services. Your success
              is our mission.
            </p>
            <br/>
            <h3 className="text-xl font-bold mb-2"><SiGooglemaps />Office:</h3>
            <p>
              St George's House |6 St George's Way <br/> Leicester | LE1 1QZ <br/>+44 (0)
              800 060 8702
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.94 9.94 0 01-2.828.775A4.93 4.93 0 0023.337 3c-.961.571-2.026.986-3.163 1.207A4.924 4.924 0 0016.616 3c-2.73 0-4.942 2.21-4.942 4.933 0 .387.043.765.127 1.126C7.691 8.82 4.066 6.723 1.64 3.766a4.925 4.925 0 00-.67 2.478c0 1.71.87 3.215 2.188 4.1A4.904 4.904 0 01.96 9.307v.062a4.932 4.932 0 003.95 4.827 4.902 4.902 0 01-2.224.085 4.936 4.936 0 004.604 3.419 9.874 9.874 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.069a13.951 13.951 0 007.548 2.211c9.057 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.014-.636A10.006 10.006 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://facebook.com" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.325 24H12.82v-9.29H9.692V11.08h3.128V8.339c0-3.1 1.892-4.785 4.657-4.785 1.325 0 2.464.099 2.798.144v3.246l-1.92.001c-1.504 0-1.795.715-1.795 1.764v2.31h3.587l-.467 3.63h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.983 3.5c0 1.381-1.12 2.5-2.502 2.5C1.12 6 0 4.881 0 3.5 0 2.12 1.12 1 2.501 1c1.382 0 2.502 1.12 2.502 2.5zM.367 8.29h4.63v15.67H.367zM8.544 8.29h4.438v2.144h.06c.617-1.172 2.126-2.417 4.377-2.417 4.676 0 5.539 3.075 5.539 7.066v8.878h-4.632v-7.87c0-1.876-.034-4.29-2.615-4.29-2.617 0-3.017 2.041-3.017 4.145v8.015H8.544z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
          <p>
            &copy; 2024 Athena Advisory Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
