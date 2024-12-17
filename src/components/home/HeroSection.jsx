import ContactButton from '../navbar/contactbutton';

export default function HeroSection() {
    return (
        <div className="">
            <div
                className=" flex lg:h-screen h-[800px] w-screen text-primary bg-[url('/hero-section-mobile.jpeg')] sm:bg-[url('/bg.png')] 
            bg-no-repeat bg-cover bg-fixed"
            >
                <div className="flex  flex-col justify-center  lg:w-1/2 px-16 h-full  items-start ">
                    <div className="lg:text-4xl text-xl font-bold">
                        Innovative Stretch Film Solutions for Every Need
                    </div>
                    <div className="hidden lg:block lg:text-l py-8 w-[80%] ">
                        At KS Enterprises, we specialize in high-quality stretch
                        film and packaging solutions designed to protect your
                        products. Explore our range of services tailored to meet
                        your unique business requirements.
                    </div>
                    <div className="block sm:hidden lg:text-l py-8 w-[80%] ">
                        At KS Enterprises, we specialize in high-quality stretch
                        film and packaging solutions designed to protect your
                        products.
                    </div>
                    <div className="flex  py-2 ">
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
