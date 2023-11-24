import Link from "next/link";
import Image from "next/image";

const navbar = () => {
    return (
        <nav className="flex justify-between pt-4 px-64">
            <div className="flex">
                <Image src="/Gator-Logo.png" alt="logo" width={34} height={34} />
                <Link href="/" className="flex pl-2">
                    <p>Kitcken Sinkhole</p>
                </Link>
            </div>
            <p>Welcome Capsuleer!</p>
        </nav>
    );
};

export default navbar;
