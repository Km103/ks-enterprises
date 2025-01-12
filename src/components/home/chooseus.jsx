import Card from './card';

export default function ChooseUs() {
    return (
        <div className=" px-16 w-screen bg-primary">
            <div className="pb-16 text-4xl text-black flex justify-center font-semibold ">
                Why Choose Us?
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center sm:space-x-16 space-y-4  z-auto">
                <Card
                    logo="/Durability.svg"
                    description="Our stretch films are built strong and resilient to keep your goods secure during transport."
                    heading="Unmatched Durability"
                />
                <Card
                    logo="/transparency.svg"
                    description="Our transparent stretch films ensure easy identification and enhance presentation efficiency."
                    heading="Crystal Clear Transparency"
                />
                <Card
                    logo="/budget.svg"
                    description="Our stretch films deliver top performance at competitive prices for cost-effective packaging."
                    heading="Budget-Friendly Solutions"
                />
            </div>
        </div>
    );
}
