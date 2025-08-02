'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <a href="#" className="text-[#03468a] hover:text-[#095b35]">
        <FaFacebook size={28} />
      </a>
      <a href="#" className="text-[#03468a] hover:text-[#095b35]">
        <FaTwitter size={28} />
      </a>
      <a href="#" className="text-[#03468a] hover:text-[#095b35]">
        <FaLinkedin size={28} />
      </a>
      <a href="#" className="text-[#03468a] hover:text-[#095b35]">
        <FaInstagram size={28} />
      </a>
    </div>
  );
}