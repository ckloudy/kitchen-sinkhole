import Image from "next/image";
import { activeStatBoxInfo } from "@/constants";

const ActiveStatBox = ({ activePilots, kills }) => {
    return (
        <div className="flex space-x-16 align-middle">
            <div>
                <Image
                    src="/ActivePilots-icon.png"
                    alt="pilots-logo"
                    width={47}
                    height={47}
                    className="pb-2"
                />

                <p className="text-5xl font-bold text-[#429FBA] pb-2">{activePilots}</p>
                <p className="text-lg font-bold">{activeStatBoxInfo[0].title}</p>
                <p className="text-sm">{activeStatBoxInfo[0].timeFrame}</p>
            </div>
            <div>
                <Image
                    src="/Kills-icon.png"
                    alt="kills-logo"
                    width={47}
                    height={47}
                    className="pb-1.5"
                />
                <>
                    <p className="text-5xl font-bold text-[#429FBA] pb-2">{kills}</p>
                    <p className="text-lg font-bold">{activeStatBoxInfo[1].title}</p>
                    <p className="text-sm">{activeStatBoxInfo[1].timeFrame}</p>
                </>
            </div>
        </div>
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
