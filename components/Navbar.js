import Image from "next/image";
import gatorSVG from "../public/Images/Gator-Logo.svg";

const navbar = () => {
    return (
        <nav className="flex justify-between pt-4">
            <div className="flex align-middle">
                <Image src={gatorSVG} alt="logo" width={34} height={34} />
                <a href="/" className="flex pl-1">
                    <p className="py-2 pl-1 text-md md:text-[1.3rem]">Kitcken Sinkhole</p>
                </a>
            </div>
            <p className="p-2 text-md md:text-[1.3rem] tracking-wide jockey">Welcome Capsuleer!</p>
        </nav>
    );
};

export default navbar;
