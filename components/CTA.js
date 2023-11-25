import Image from "next/image";
import PrimaryCta from "./ui/PrimaryCta";
import SecondaryCta from "./ui/SecondaryCta";

const CTA = () => {
    return (
        <section className="mt-24 mb-16 text-center">
            <Image src="/Gator-logo-lg.png" width={118} height={118} className="mx-auto" />
            <h2 className="text-5xl pb-3">Join the Gators today!</h2>
            <p className="text-xl">90% reduction in ship spinning, guaranteed</p>
            <div className="text-center mt-11 mb-52 space-x-11 flex justify-center">
                <PrimaryCta href={"https://discord.com/invite/b9Nw39M"} text={"Join Now"} />
                <SecondaryCta href={"https://www.youtube.com/@KitchenSinkhole"} text={"Youtube"} />
            </div>
        </section>
    );
};

export default CTA;
