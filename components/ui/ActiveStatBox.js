import { activeStatBoxInfo } from "@/constants";

const ActiveStatBox = ({ activePilots, kills }) => {
    return (
        <>
            <div className="text-center justify-center w-full">
                <img
                    src="/ActivePilots-icon.png"
                    alt="pilots-logo"
                    width={47}
                    height={47}
                    className="py-4 mx-auto"
                />
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">
                    {activePilots}
                </p>
                <p className="text-lg font-bold jockey">{activeStatBoxInfo[0].title}</p>
                <p className="text-sm jockey">{activeStatBoxInfo[0].timeFrame}</p>
            </div>
            <div className="text-center justify-center w-full">
                <img
                    src="/Kills-icon.png"
                    alt="kills-logo"
                    width={47}
                    height={47}
                    className="pb-3.5 pt-4 mx-auto"
                />
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">{kills}</p>
                <p className="text-lg font-bold jockey">{activeStatBoxInfo[1].title}</p>
                <p className="text-sm jockey">{activeStatBoxInfo[1].timeFrame}</p>
            </div>
        </>
    );
};

export default ActiveStatBox;
