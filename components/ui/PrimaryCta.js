const PrimaryCta = ({ href, text }) => {
    return (
        <div>
            <div className="w-40 md:w-44 mx-auto mb-6 md:mb-0 md:flex">
                <a
                    href={href}
                    target="_blank"
                    className="rounded-sm font-bold bg-[#429FBA] hover:bg-gradient-to-b from-[#429FBA] to-[#90cadb]  flex md:space-x-2 tracking-wider ml-0 px-8 py-4">
                    <img
                        src="Images/Discord-Icon.svg"
                        alt="Discord icon"
                        width={20}
                        height={10}
                        className="mr-2"
                    />
                    <p className="text-black text-lg">{text}</p>
                </a>
            </div>
        </div>
    );
};

export default PrimaryCta;
