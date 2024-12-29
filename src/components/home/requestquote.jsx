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
                <div className="flex flex-row gap-x-8 justify-start">
                    <ContactButton />
                </div>
            </div>
        </div>
    );
}
