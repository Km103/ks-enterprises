import Link from 'next/link';

export default function ProductsFooter() {
    return (
        <div className="flex flex-col px-4">
            <div className="font-bold  pb-4">Products</div>

            <div className="flex flex-col space-y-2 text-sm">
                <Link href="/" className="">
                    Manual Grade Stretch Film
                </Link>
                <Link href="/" className="">
                    Hand Grade Stretch Film
                </Link>
                <Link href="/" className="">
                    Agricultural Film
                </Link>
                <Link href="/" className="">
                    Cling Film
                </Link>
            </div>
        </div>
    );
}
