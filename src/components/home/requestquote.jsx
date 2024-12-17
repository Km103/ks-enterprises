import ContactButton from '../navbar/contactbutton';
export default function RequestQuote() {
    return (
        <div className="flex flex-row justify-around">
            <div className="text-black text-5xl w-1/3 font-bold">
                Get Your Custom Quote Today
            </div>
            <div className="flex flex-col justify-center w-1/2 gap-y-8 px-16">
                <div className="text-lg ">
                    Have questions or need a specific solution? Our team is
                    ready to assist you with tailored information and quotes
                    that meet your needs.
                </div>
                <div className="flex flex-row gap-x-8">
                    <ContactButton />
                    <button
                        className="bg-primary  border-blue-primary text-blue-primary lg:border-2  rounded-2xl 
            hover:text-primary hover:bg-blue-primary  hover:border-blue-primary 
            font-semibold  sm:text-md border-1  sm:p-3 p-2 text-sm"
                    >
                        Request Quote
                    </button>
                </div>
            </div>
        </div>
    );
}
