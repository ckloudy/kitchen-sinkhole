import { travelStatBoxInfo } from "@/constants";

const TravelStatBox = ({ regions, systems }) => {
    return (
        <>
            <div>
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">{regions}</p>
                <p className="text-lg font-bold">{travelStatBoxInfo[0].title}</p>
                <p className="text-sm">{travelStatBoxInfo[0].timeFrame}</p>
            </div>
            <div>
                <p className="text-5xl font-bold text-[#429FBA] pb-2 secondaryFont">{systems}</p>
                <p className="text-lg font-bold">{travelStatBoxInfo[1].title}</p>
                <p className="text-sm">{travelStatBoxInfo[1].timeFrame}</p>
            </div>
        </>
    );
};

export default TravelStatBox;
