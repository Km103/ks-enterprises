import Image from 'next/image';
export default function Card({ logo, heading, description }) {
    return (
        <div
            className="bg-[linear-gradient(148.60315905807244deg,rgba(21,11,207,0.01)_53.399962186813354%,rgba(21,11,207,0.03)_100%)]
        flex flex-col py-12 px-12 border-2 hover:border-blue-primary hover:border-opacity-15 
        justify-around items-center text-black rounded-3xl space-y-4 w-80 min-h-[360px]"
        >
            <Image src={logo} width={80} height={80} alt="photo"></Image>
            <div className="flex text-xl font-bold text-center">{heading}</div>
            <div className="flex text-sm text-center">{description}</div>
        </div>
    );
}
