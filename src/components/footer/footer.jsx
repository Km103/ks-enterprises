import Icons from './icons';
import ProductsFooter from './productsfooter';
import ContactFooter from './contactfooter';
import { FaRegCopyright } from 'react-icons/fa';
export default function Footer() {
    return (
        <div className="bg-blue-primary px-16 py-16 flex flex-col text-primary">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col w-1/3 ">
                    <div className="font-bold text-3xl  pb-8 ">
                        KS Enterprises
                    </div>

                    <div className="mr-24 font-bold ">
                        At KS Enterprises, we specialize in high-quality stretch
                        film and packaging solutions designed to protect your
                        products.
                    </div>
                    <div className="py-16 ">
                        <Icons />
                    </div>
                </div>
                <div className="w-1/2 flex justify-end py-1 gap-x-24">
                    <ProductsFooter />

                    <ContactFooter />
                </div>
            </div>

            <div className="mt-4 border-t border-primary w-full "></div>

            <div className="pt-8 flex flex-row items-center text-sm">
                <FaRegCopyright />

                <div className="px-2">
                    2024 KS Enterprises. All rights reserved.
                </div>
            </div>
        </div>
    );
}
