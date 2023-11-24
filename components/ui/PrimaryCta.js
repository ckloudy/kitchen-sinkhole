import Link from "next/link";
import Image from "next/image";

const PrimaryCta = ({ href, text }) => {
    return (
        <div className="flex">
            <Link
                href={href}
                target="_blank"
                className="rounded-sm font-bold bg-[#429FBA] px-12 py-4 flex space-x-2">
                {/* <Image src="/Discord-icon.png" alt="discord icon" width={17} height={17} /> */}
                <p>Discord</p>
                {/* {text} */}
            </Link>
        </div>
    );
};

export default PrimaryCta;
