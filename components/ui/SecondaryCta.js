import Image from "next/image";
import youtubeIcon from "../../public/Images/YouTube-I-New.svg";

const SecondaryCta = ({ href, text }) => {
    return (
        <div>
            <div className="w-40 md:w-44 mx-auto md:flex text-center">
                <a
                    href={href}
                    target="_blank"
                    className="rounded-sm font-bold bg-[#C05B33] hover:hover:bg-gradient-to-b from-[#C05B33] to-[#be785e] flex md:space-x-2 tracking-wider ml-0 px-8 py-4">
                    <Image
                        src={youtubeIcon}
                        alt="YouTube icon"
                        width={25}
                        height={"auto"}
                        className="mr-2"
                    />
                    <p className="text-white text-lg">{text}</p>
                </a>
            </div>
        </div>
    );
};

export default SecondaryCta;
