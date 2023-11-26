import { heroCardContent } from "@/constants";
import ActiveStatBox from "./ActiveStatBox";

const HeroCard = ({ activePilots, kills }) => {
    return (
        <div className="block lg:flex mt-20 justify-between lg:space-x-4 card_style">
            <div className="lg:flex px-12 py-10">
                <div className="w-full lg:w-2/3 mb-12 lg:mb-0 text-center lg:py-3 xl:py-8">
                    <h2 className="text-3xl pb-3 font-bold ">{heroCardContent.heading}</h2>
                    <p className="w-full leading-7 lg:pr-16 secondaryFont text-sm">
                        {heroCardContent.desc}
                    </p>
                </div>
                <div className="flex justify-center w-full lg:justify-end lg:w-1/3 space-x-7 md:space-x-1 lg:space-x-4">
                    <ActiveStatBox activePilots={activePilots} kills={kills} />
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
