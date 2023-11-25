import Image from "next/image";
import { activeStatBoxInfo } from "@/constants";

const ActiveStatBox = ({ activePilots, kills }) => {
    return (
        <>
            <div className="text-center justify-center w-full">
                <Image
                    src="/ActivePilots-icon.png"
                    alt="pilots-logo"
                    width={47}
                    height={47}
                    className="py-4 mx-auto"
                />
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">
                    {activePilots}
                </p>
                <p className="text-lg font-bold">{activeStatBoxInfo[0].title}</p>
                <p className="text-sm">{activeStatBoxInfo[0].timeFrame}</p>
            </div>
            <div className="text-center justify-center w-full">
                <Image
                    src="/Kills-icon.png"
                    alt="kills-logo"
                    width={47}
                    height={47}
                    className="pb-3.5 pt-4 mx-auto"
                />
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">{kills}</p>
                <p className="text-lg font-bold">{activeStatBoxInfo[1].title}</p>
                <p className="text-sm">{activeStatBoxInfo[1].timeFrame}</p>
            </div>
        </>
    );
};

export default ActiveStatBox;

{
    /* <>
    <p className="text-5xl font-bold text-[#429FBA] pb-2" key={i}>
        {travelStats.regions}
    </p>
    <p className="text-lg font-bold">{item.title}</p>
    <p className="text-sm">{item.timeFrame}</p>
</>;
<>
    <p className="text-5xl font-bold text-[#429FBA] pb-2" key={i}>
        {travelStats.regions}
    </p>
    <p className="text-lg font-bold" key={i}>
        {item.title}
    </p>
    <p className="text-sm" key={i}>
        {item.timeFrame}
    </p>
</>; */
}
