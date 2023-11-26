import PrimaryCta from "./ui/PrimaryCta";
import SecondaryCta from "./ui/SecondaryCta";

const CTA = () => {
    return (
        <section className="mt-24 mb-16 text-center">
            <img src="Images/Gator-logo-lg.png" width={118} height={118} className="mx-auto" />
            <h2 className="text-4xl md:text-5xl pb-3">Join the Gators today!</h2>
            <p className="text-md lg:text-lg secondaryFont">
                90% reduction in ship spinning, guaranteed
            </p>
            <div className="text-center mt-12 md:mt-8 justify-center md:space-x-11 md:flex mb-40">
                <PrimaryCta href={"https://discord.com/invite/b9Nw39M"} text={"Join Now"} />
                <SecondaryCta href={"https://www.youtube.com/@KitchenSinkhole"} text={"Youtube"} />
            </div>
        </section>
    );
};

export default CTA;
