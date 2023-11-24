import { heroCardContent } from "@/constants";
import ActiveStatBox from "./ActiveStatBox";

const HeroCard = ({ activePilots, kills }) => {
    return (
        <div className="flex mt-32 mb-36 justify-between h-[250px] w-[auto] m-auto rounded-lg pt-12 px-16 backdrop-blur-sm border-2 border-slate-600 bg-[#091118] bg-opacity-80">
            <div className=" w-2/3">
                <h2 className="text-2xl pb-8 font-bold">{heroCardContent.heading}</h2>
                <p className="leading-7">{heroCardContent.desc}</p>
            </div>
            <ActiveStatBox activePilots={activePilots} kills={kills} />
        </div>
    );
};

export default HeroCard;
