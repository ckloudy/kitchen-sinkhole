import Link from "next/link";
import Image from "next/image";

const SecondaryCta = ({ href, text }) => {
    return (
        <div className="flex">
            <Link
                href={href}
                target="_blank"
                className="rounded-sm font-bold bg-[#C05B33] px-12 py-4 flex space-x-2">
                {/* <Image src="/YouTube-icon.png" alt="YouTube icon" width={17} height={17} /> */}
                {text}
            </Link>
        </div>
    );
};

export default SecondaryCta;
