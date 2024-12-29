import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import ChooseUs from '@/components/home/chooseus';
import RequestQuote from '@/components/home/requestquote';
import ExploreProducts from '@/components/home/exploreProducts';

export default function Home() {
    return (
        <div className="flex flex-col ">
            <div className="flex ">
                <HeroSection />
            </div>
            <div className="flex py-16">
                <ChooseUs />
            </div>

            <div className="text-4xl text-black text-center font-bold mt-16 py-8">
                Explore Our Products
            </div>
            <div className="flex  py-16">
                <ExploreProducts />
            </div>

            <div className="flex px-16 py-24 w-screen">
                <RequestQuote />
            </div>
        </div>
    );
}
