import Link from "next/link";
import Image from "next/image";

const Hero = ({ stats }) => {
    {
        /* Title and subtitle with CTA links */
    }

    return (
        <section>
            <div className="text-center">
                <h1 className="text-8xl font-bold">For Riches and Glory!</h1>
                <p className="text-xl font-bold mt-5">
                    Join an active and friendly Wormhole Corp where the only blues are our high sec
                    static
                </p>
            </div>
            <div className="text-center mt-12 space-x-11">
                <Link
                    href="https://discord.com/invite/b9Nw39M"
                    target="_blank"
                    className="px-8 py-4 mb-3 bg-[#429FBA] rounded-sm font-bold">
                    Join Now
                </Link>
                <Link
                    href="https://www.youtube.com/@KitchenSinkhole"
                    target="_blank"
                    className="px-9 py-4 mb-3 bg-[#C05B33] rounded-sm">
                    YouTube
                </Link>
            </div>

            {/* Corp description and content box with active pilot stats and kills */}

            <div className="flex mt-32 mb-36 justify-between h-[250px] w-[auto] m-auto rounded-lg pt-12 px-16 backdrop-blur-sm border-2 border-slate-600 bg-[#091118] bg-opacity-80">
                <div className=" w-2/3">
                    <h2 className="text-2xl pb-8 font-bold">Content is a plenty!</h2>
                    <p className="leading-7">
                        We have very active player participation and organise regular OP's. If
                        you're a new or returning player who would like to explore uncharted
                        wormhole space, experience exciting wormhole PVP or simply looking for a
                        laid-back and relaxed corporation, you will feel right at home with [DKVC]
                    </p>
                </div>
                <div className="flex space-x-16 align-middle">
                    <div>
                        <Image
                            src="/ActivePilots-icon.png"
                            alt="pilots-logo"
                            width={47}
                            height={47}
                            className="pb-2"
                        />
                        <p className="text-5xl font-bold text-[#429FBA] pb-2">
                            {stats.activePilots}
                        </p>
                        <p className="text-lg font-bold">ACTIVE PILOTS</p>
                        <p className="text-sm">Last 7 days</p>
                    </div>
                    <div>
                        <Image
                            src="/Kills-icon.png"
                            alt="kills-logo"
                            width={47}
                            height={47}
                            className="pb-1.5"
                        />
                        <p className="text-5xl font-bold text-[#429FBA] pb-2">{stats.kills}</p>
                        <p className="text-lg font-bold">PVP Kills</p>
                        <p className="text-sm">Last Month</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
