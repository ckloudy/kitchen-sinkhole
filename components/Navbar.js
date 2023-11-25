import Link from "next/link";
import Image from "next/image";

const navbar = () => {
    return (
        <nav className="flex justify-between pt-4">
            <div className="flex align-middle">
                <Image src="/Gator-Logo.png" alt="logo" width={34} height={34} />
                <Link href="/" className="flex pl-2">
                    <p className="p-2">Kitcken Sinkhole</p>
                </Link>
            </div>
            <p className="p-2">Welcome Capsuleer!</p>
        </nav>
    );
};

export default navbar;
