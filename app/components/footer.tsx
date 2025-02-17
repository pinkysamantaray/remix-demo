import { Link } from '@remix-run/react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full text-center text-gray-400 p-4 pt-6">
      <Link className="font-bold" to="/about">
        About
      </Link>
      <p>© 2025 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
