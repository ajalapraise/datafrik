import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);



    const isLinkActive = (linkPath) => {
        return router.asPath === linkPath;
    };


    return (
        <div className="flex w-full justify-between fixed shadow-lg border-b-2  bg-black h-[100px] top-0 z-50">
            <div className="md:w-[50%] ml-4 md:ml-20 flex justify-start items-center">
                <Link href="/" className={` text-[12px] md:text-[20px] font-bold`}>
                    <h1>JustAnotherUIKit</h1>
                </Link>
            </div>



            <div className={`w-[60%] md:w-[50%] flex justify-end `}>
                <div className='w-full md:w-[50%] flex justify-between items-center'>
                    <Link
                        href='/#home'
                        className={`hover:text-[#FFFF00] text-[12px] md:text-[16px]  w-1/4 ${isLinkActive("/#home") ? "font-extrabold text-md" : "font-normal"} `}
                    >
                        Home
                    </Link>

                    <Link
                        href="/#about"
                        className={`hover:text-[#FFFF00] text-[12px] md:text-[16px]  w-1/4 ${isLinkActive("/#about") ? "font-extrabold text-md" : "font-normal"} `}                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className={`hover:text-[#FFFF00] text-[12px] md:text-[16px]  w-1/4 ${isLinkActive("/#contact") ? "font-extrabold text-md" : "font-normal"} `}                    >
                        Contact
                    </Link>
                    <Link
                        href="#blog"
                        className={`hover:text-[#FFFF00] text-[12px] md:text-[16px]  w-1/4 ${isLinkActive("/#blog") ? "font-extrabold text-md" : "font-normal"} `}                    >
                        Blog
                    </Link>
                </div>


            </div>

        </div>

    );
};

export default Navbar;
