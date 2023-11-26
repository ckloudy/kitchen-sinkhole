const footer = () => {
    return (
        <div className="relative bottom-0 mb-20">
            <p className="text-xl text-[#C05B33] font-bold text-center decoration-solid jockey">
                Useful Links
            </p>
            <div className="flex px-auto justify-center pt-4">
                <ul className="flex space-x-3 py-auto">
                    <a
                        href={"https://tools.darkventure.space/account/login/?next=/dashboard/"}
                        target="_blank"
                        className="text-[#429FBA] text-sm md:text-md lg:text-lg hover:text-white tracking-wider">
                        Auth / Tools
                    </a>
                    <a
                        href={"https://pf.darkventure.space/"}
                        target="_blank"
                        className="text-[#429FBA] text-sm md:text-md lg:text-lg hover:text-white tracking-wider">
                        Pathfinder
                    </a>
                    <a
                        href={
                            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSaCHnBRDw8Ki6nuamMzQv3InN978Zh7F6RcwlYdJHnlQkDrrdz5zrG3Of_8eoyxeqJimMHt9-7GjLn/pubhtml#"
                        }
                        target="_blank"
                        className="text-[#429FBA] text-sm md:text-md lg:text-lg hover:text-white tracking-wider">
                        WH ISK Guide
                    </a>
                    <a
                        href={
                            "https://www.youtube.com/watch?v=sP0hYYK3Tc8&list=PLk9inrh_er6Nx94sTw1sqRTvf0laDuHnG&pp=iAQB"
                        }
                        target="_blank"
                        className="text-[#429FBA] text-sm md:text-md lg:text-lg hover:text-white tracking-wider">
                        Small Gang Training
                    </a>
                </ul>
            </div>
            <div className="text-center mt-8">
                <p className="text-xs">© 2023 Kitchen Sinkhole</p>
            </div>
        </div>
    );
};

export default footer;
