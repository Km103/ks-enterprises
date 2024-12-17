import ContactButton from './contactbutton';
import Menu from './menu';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
    return (
        <div className=" sticky top-0 z-50 flex items-center  h-[76px] w-full bg-primary sm:px-16 px-8 ">
            <div className="block sm:hidden w-1/5">
                <GiHamburgerMenu className="text-blue-primary font-bold text-2xl " />
            </div>

            <div className="flex text-blue-primary font-[800] lg:text-3xl text-xl w-3/5">
                KS Enterprises
            </div>
            <div className=" hidden lg:block w-[30%]   py-2">
                <Menu />
            </div>
            <div className="justify-end  ">
                <ContactButton />
            </div>
        </div>
    );
}
