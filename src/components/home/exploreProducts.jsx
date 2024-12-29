import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function ExploreProducts() {
    return (
        <div className="flex flex-row gap-x-16 justify-center items-center w-full">
            <div className="flex flex-col w-60 justify-start items-center ">
                <Image
                    src="/home_machine.png"
                    width={160}
                    height={160}
                    alt="machine Grade pic"
                />
                <div className="text-lg font-bold pt-4 ">
                    Machine Grade Stretch Film
                </div>

                <div className="text-sm py-2 items-center justify-center text-center">
                    Strong film for machine-wrapping pallets in industrial
                    packaging.
                </div>

                <Link href="/products/machine-grade-stretch-film">
                    <div className=" items-center my-2 py-2 bg-blue-primary px-4 flex flex-row rounded-xl">
                        <button className="text-sm text-primary font-bold mr-2">
                            Learn more
                        </button>

                        <FaArrowUpRightFromSquare className="text-primary text-sm" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col w-60 justify-start items-center">
                <Image
                    src="/home_manual.png"
                    width={160}
                    height={160}
                    alt="machine Grade pic"
                />
                <div className="text-lg font-bold pt-4 ">
                    Manual Grade Stretch Film
                </div>

                <div className="text-sm py-2 items-center justify-center text-center">
                    Flexible film for hand-wrapping cartons and small loads.
                </div>

                <Link href="/products/manual-grade-stretch-film">
                    <div className=" items-center my-2 py-2 bg-blue-primary px-4 flex flex-row rounded-xl">
                        <button className="text-sm text-primary font-bold mr-2">
                            Learn more
                        </button>

                        <FaArrowUpRightFromSquare className="text-primary text-sm" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col w-60 justify-start items-center">
                <Image
                    src="/home_agricultural.png"
                    width={160}
                    height={160}
                    alt="machine Grade pic"
                />
                <div className="text-lg font-bold pt-4 ">Agricultural Film</div>

                <div className="text-sm py-2 items-center justify-center text-center">
                    Durable film for wrapping silage bales and preserving crops.
                </div>

                <Link href="/products/agricultural-film">
                    <div className=" items-center my-2 py-2 bg-blue-primary px-4 flex flex-row rounded-xl">
                        <button className="text-sm text-primary font-bold mr-2">
                            Learn more
                        </button>

                        <FaArrowUpRightFromSquare className="text-primary text-sm" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col w-60 justify-start items-center">
                <Image
                    src="/home_cling.png"
                    width={160}
                    height={160}
                    alt="machine Grade pic"
                />
                <div className="text-lg font-bold pt-4 ">Cling Film</div>

                <div className="text-sm py-2 items-center justify-center text-center">
                    Clear film for maintaining freshness in food containers.
                </div>

                <Link href="/products/cling-film">
                    <div className=" items-center my-2 py-2 bg-blue-primary px-4 flex flex-row rounded-xl">
                        <button className="text-sm text-primary font-bold mr-2">
                            Learn more
                        </button>

                        <FaArrowUpRightFromSquare className="text-primary text-sm" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
