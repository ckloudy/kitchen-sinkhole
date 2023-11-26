import { title } from "@/constants";
import PrimaryCta from "./PrimaryCta";
import SecondaryCta from "./SecondaryCta";

const HeroMain = () => {
    return (
        <div className="text-center">
            <div>
                <h1 className="text-7xl md:text-8xl font-bold tracking-wide">{title.title}</h1>
                <p className="text-md md:text-xl font-semibold mt-12 md:mt-8 tracking-wide">
                    {title.subtitle}
                </p>
            </div>
            <div className="text-center mt-12 md:mt-8 justify-center md:space-x-11 md:flex">
                <PrimaryCta href={"https://discord.com/invite/b9Nw39M"} text={"Join Now"} />
                <SecondaryCta href={"https://www.youtube.com/@KitchenSinkhole"} text={"Youtube"} />
            </div>
        </div>
    );
};

export default HeroMain;
