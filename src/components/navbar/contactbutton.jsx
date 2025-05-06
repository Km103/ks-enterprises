import Link from 'next/link';

export default function ContactButton() {
    return (
        <Link href="/contact-us">
            <button
                className="bg-blue-primary border-blue-primary text-primary lg:border-2 rounded-2xl 
                hover:text-blue-primary hover:bg-primary hover:border-blue-primary 
                font-semibold sm:text-md border-1 sm:p-3 p-2 text-sm"
            >
                Contact us
            </button>
        </Link>
    );
}
