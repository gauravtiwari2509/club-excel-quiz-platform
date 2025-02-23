import React from "react";
import Image from "next/image";

const logoStyle = "w-25 h-25 rounded-full bg-white p-1 cursor-pointer";
const Footer = () => {
  return (
    <div className="w-screen p-2 flex flex-col gap-1 justify-center items-center">
      <div className="flex gap-4 ">
        <a
          href="https://linkedin.com/company/club-excel-nist/"
          target="_blank"
          rel="noopener noreferrer"
          className={logoStyle}
        >
          <Image
            src="/photo/linkedInLogo.svg"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://instagram.com/_club_excel_?igshid=bG40ZnMxd3lwNDcz"
          target="_blank"
          rel="noopener noreferrer"
          className={logoStyle}
        >
          <Image
            src="/photo/instagramLogo.svg"
            alt="Instagram"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://x.com/_club_excel_?t=fMzfK3CcCFMWGtjxdDrqXw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className={logoStyle}
        >
          <Image src="/photo/xLogo.svg" alt="X" width={20} height={20} />
        </a>
        <a
          href="https://www.facebook.com/excelnist?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className={logoStyle}
        >
          <Image
            src="/photo/facebookLogo.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
      </div>
      <span className=" text-xs text-gray-300">
        2023 © Club Excel - ALL RIGHTS RESERVED
      </span>
    </div>
  );
};

export default Footer;
