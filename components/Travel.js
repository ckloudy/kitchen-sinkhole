import Image from "next/image";
import TravelStatBox from "./ui/TravelStatBox";
import { travel } from "@/constants";

const Travel = ({ regions, systems }) => {
    return (
        <section className="flex mt-56 mb-44">
            <div className="flex justify-between">
                <div className="w-1/4">
                    <Image src="/Travel-Icon.png" alt="travel-icon" width={47} height={47} />
                    <h2 className="text-3xl my-6">{travel.heading}</h2>
                    <p className="text-lg my-3 border-t-2 pt-6 font-bold">{travel.subheading}</p>
                    <TravelStatBox regions={regions} systems={systems} />
                    <p className="text-md mt-7 border-t-2 pt-6">{travel.flavour}</p>
                </div>
                <div className="flex space-x-8 justify-end w-2/3">
                    <Image
                        src="/Caldari-space.png"
                        alt={"image of caldari space imagined by AI"}
                        width={170}
                        height={476}
                    />
                    <Image
                        src="/Amarr-space.png"
                        alt={"image of Amarr space imagined by AI"}
                        width={170}
                        height={476}
                    />
                    <Image
                        src="/Minmitar-space.png"
                        alt={"image of Minmatar space imagined by AI"}
                        width={170}
                        height={476}
                    />
                    <Image
                        src="/Gallente-space.png"
                        alt={"image of Gallente space imagined by AI"}
                        width={170}
                        height={476}
                    />
                </div>
            </div>
        </section>
    );
};

export default Travel;
