import { title } from "@/constants";
import PrimaryCta from "./PrimaryCta";
import SecondaryCta from "./SecondaryCta";

const HeroMain = () => {
    return (
        <div className="text-center">
            <h1 className="text-8xl font-bold">{title.title}</h1>
            <p className="text-xl font-semibold mt-4">{title.subtitle}</p>
            <div className="text-center my-20 space-x-11 flex justify-center">
                <PrimaryCta href={"https://discord.com/invite/b9Nw39M"} text={"Join Now"} />
                <SecondaryCta href={"https://www.youtube.com/@KitchenSinkhole"} text={"Youtube"} />
            </div>
        </div>
    );
};

export default HeroMain;
