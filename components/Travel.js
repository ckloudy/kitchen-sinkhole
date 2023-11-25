import Image from "next/image";
import TravelStatBox from "./ui/TravelStatBox";
import { travel } from "@/constants";
import Caldari from "../public/Caldari-space.png";
import Amarr from "../public/Amarr-space.png";
import Minmitar from "../public/Minmitar-space.png";
import Gallente from "../public/Gallente-space.png";

const Travel = ({ regions, systems }) => {
    return (
        <section className="text-center flex my-24">
            <div className="w-full block lg:flex justify-center lg:justify-between travel_card_style px-12 py-10 2xl:px-28">
                <div className="w-full lg:w-1/2 lg:pr-3 xl:w-1/4 mb-8">
                    <Image
                        src="/Travel-Icon.png"
                        alt="travel-icon"
                        width={47}
                        height={47}
                        className="mx-auto"
                    />
                    <h2 className="text-3xl my-6">{travel.heading}</h2>
                    <p className="text-lg my-3 border-t-2 pt-6 pb-4 font-bold">
                        {travel.subheading}
                    </p>
                    <div className="justify-center flex space-x-20 align-middle">
                        <TravelStatBox regions={regions} systems={systems} />
                    </div>
                    <p className="text-md mt-7 border-t-2 pt-6">{travel.flavour}</p>
                </div>

                <div className="grid grid-cols-4 gap-3 xl:gap-9 2xl:gap-12 justify-center lg:justify-end lg:pl-3">
                    <Image
                        src={Caldari}
                        alt={"image of caldari space imagined by AI"}
                        className="w-full h-full"
                    />
                    <Image
                        src={Amarr}
                        alt={"image of Amarr space imagined by AI"}
                        className="w-full h-full"
                    />
                    <Image
                        src={Minmitar}
                        alt={"image of Minmatar space imagined by AI"}
                        className="w-full h-full"
                    />
                    <Image
                        src={Gallente}
                        alt={"image of Gallente space imagined by AI"}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Travel;

// md:w-3/4 lg:w-2/3
{
    /* <div className="block lg:flex space-x-8 md:mx-auto lg:mx-0"></div> */
}
