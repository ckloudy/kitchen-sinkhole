import { activeStatBoxInfo } from "@/constants";
import AnimatedNumber from "@/utils/numberCounter";

const ActiveStatBox = ({ activePilots, kills }) => {
    const animatedKills = AnimatedNumber(kills);
    const animatedActivePilots = AnimatedNumber(activePilots);
    return (
        <>
            <div className="justify-center w-full text-center">
                <img
                    src="Images/ActivePilots-icon.png"
                    alt="pilots-logo"
                    width={47}
                    height={47}
                    className="py-4 mx-auto"
                />
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">
                    {animatedActivePilots}
                </p>
                <p className="text-lg font-bold jockey">{activeStatBoxInfo[0].title}</p>
                <p className="text-sm jockey">{activeStatBoxInfo[0].timeFrame}</p>
            </div>
            <div className="justify-center w-full text-center">
                <img
                    src="Images/Kills-icon.png"
                    alt="kills-logo"
                    width={47}
                    height={47}
                    className="pb-3.5 pt-4 mx-auto"
                />
                <p id="value" className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont ">
                    {animatedKills}
                </p>
                <p className="text-lg font-bold jockey">{activeStatBoxInfo[1].title}</p>
                <p className="text-sm jockey">{activeStatBoxInfo[1].timeFrame}</p>
            </div>
        </>
    );
};

export default ActiveStatBox;
