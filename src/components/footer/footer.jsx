import Icons from './icons';
import ProductsFooter from './productsfooter';
import ContactFooter from './contactfooter';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-blue-primary px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 flex flex-col text-primary">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-y-8">
                {/* Left Section */}
                <div className="flex flex-col w-full lg:w-1/3">
                    <div className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 sm:pb-6 lg:pb-8">
                        KS Enterprises
                    </div>

                    <div className="text-sm sm:text-base sm:mr-0 lg:mr-24 font-medium">
                        At KS Enterprises, we specialize in high-quality stretch
                        film and packaging solutions designed to protect your
                        products.
                    </div>
                    <div className="pt-8">
                        <Icons />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row w-full lg:w-1/2 justify-between lg:justify-end py-1 gap-x-8 sm:gap-x-12">
                    <ProductsFooter />
                    <ContactFooter />
                </div>
            </div>

            {/* Divider */}
            <div className="mt-8 border-t border-primary w-full"></div>

            {/* Bottom Section */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-y-4">
                <div className="flex flex-row items-center">
                    <FaRegCopyright />
                    <div className="px-2">
                        2024 KS Enterprises. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
