'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronForwardSharp } from 'react-icons/io5';

import FlyoutMenu from './flyOutMenu';

export default function Menu() {
    const pathname = usePathname();

    return (
        <div className=" flex w-full justify-center flex-row text-black py-2 font-bold  items-center">
            <Link
                href="/"
                className={`  px-4 
                ${pathname === '/' ? 'text-blue-primary' : 'hover:text-blue-primary'}`}
            >
                Home
            </Link>

            <div className=" relative group mx-4 flex row items-center hover:text-blue-primary">
                <div className="px-2 ">Products</div>

                <div className="transition group-hover:rotate-90">
                    <IoChevronForwardSharp className="text-lg " />
                </div>
                <div
                    className="absolute left-1/2 top-full transform -translate-x-1/2 w-24 bg-transparent h-2 
                border-l-8 border-r-8 border-b-8 border-transparent border-t-white"
                ></div>
                <FlyoutMenu />
            </div>
            <Link
                href="/about"
                className={` px-4 ${
                    pathname === '/about'
                        ? 'text-black'
                        : 'hover:text-blue-primary'
                }`}
            >
                About Us
            </Link>
        </div>
    );
}
