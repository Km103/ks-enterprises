export default function FlyoutMenu() {
    return (
        <div
            className="absolute left-0 top-full mt-2 w-60 bg-primary  rounded-md  opacity-0 
    group-hover:opacity-100 transition duration-300 pointer-events-none group-hover:pointer-events-auto
     flex  flex-col font-normal "
        >
            <div className="pt-4 "></div>
            <a
                href="/products/manual-grade-stretch-film"
                className="block px-4 py-3  text-sm text-black hover:text-blue-primary "
            >
                Manual Grade Stretch Film
            </a>
            <a
                href="/products/machine-grade-stretch-film"
                className="block px-4 py-3 text-sm text-black hover:text-blue-primary"
            >
                Machine Grade Stretch Film
            </a>
            <a
                href="/products/cling-film"
                className="block px-4  py-3   text-sm text-black hover:text-blue-primary"
            >
                Cling Film
            </a>
            <a
                href="/products/agricultural-film"
                className="block px-4  py-3   text-sm text-black hover:text-blue-primary"
            >
                Agriculture Film
            </a>
        </div>
    );
}
