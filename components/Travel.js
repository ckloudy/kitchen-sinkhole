import TravelStatBox from "./ui/TravelStatBox";
import { travel } from "@/constants";

const Travel = ({ regions, systems }) => {
    return (
        <section className="text-center flex my-24">
            <div className="w-full block lg:flex justify-center lg:justify-between travel_card_style px-12 py-10 2xl:px-28">
                <div className="w-full lg:w-1/2 lg:pr-3 xl:w-1/4 mb-8">
                    <img
                        src="/Images/Travel-Icon.png"
                        alt="travel-icon"
                        width={47}
                        height={47}
                        className="mx-auto"
                    />
                    <h2 className="text-3xl my-6 font-normal">{travel.heading}</h2>
                    <p className="text-md my-3 border-t-2 pt-6 pb-4 font-regular secondaryFont">
                        {travel.subheading}
                    </p>
                    <div className="justify-center flex space-x-20 align-middle">
                        <TravelStatBox regions={regions} systems={systems} />
                    </div>
                    <p className="text-md mt-7 border-t-2 pt-6">{travel.flavour}</p>
                </div>

                <div className="grid grid-cols-4 gap-3 lg:w-2/3 xl:gap-9 2xl:gap-12 justify-center lg:justify-end lg:pl-3">
                    <img
                        src="/Images/Caldari-space.png"
                        alt={"image of caldari space imagined by AI"}
                        className="w-full h-full"
                    />
                    <img
                        src="/Images/Amarr-space.png"
                        alt={"image of Amarr space imagined by AI"}
                        className="w-full h-full"
                    />
                    <img
                        src="/Images/Minmitar-space.png"
                        alt={"image of Minmatar space imagined by AI"}
                        className="w-full h-full"
                    />
                    <img
                        src="/Images/Gallente-space.png"
                        alt={"image of Gallente space imagined by AI"}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Travel;
