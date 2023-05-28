import React, { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <header className="py-4 bg-gray-200 text-center">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/">
                home
              </Link>
            </li>
            <li>
              <Link href="/about">
                about
              </Link>
            </li>
            <li>
              <Link href="/contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-gray-200 flex-1 flex items-center justify-center overflow-hidden">
        {children}
      </main>

      <footer className="py-4 bg-gray-200 text-center absolute bottom-0 left-0 w-full text-sm">
        © {new Date().getFullYear()}, Jacob Makarsky
      </footer>
    </div>
  );
};

export default Layout;

