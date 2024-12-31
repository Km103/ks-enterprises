import Link from 'next/link';

export default function ProductsFooter() {
    return (
        <div className="flex flex-col px-4">
            <div className="font-bold  pb-4">Products</div>

            <div className="flex flex-col space-y-2 text-sm">
                <Link href="/products/manual-grade-stretch-film" className="">
                    Manual Grade Stretch Film
                </Link>
                <Link href="/products/machine-grade-stretch-film" className="">
                    Machine Grade Stretch Film
                </Link>
                <Link href="/products/agricultural-film" className="">
                    Agricultural Film
                </Link>
                <Link href="/products/cling-film" className="">
                    Cling Film
                </Link>
            </div>
        </div>
    );
}
