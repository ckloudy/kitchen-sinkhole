import Link from "next/link";

const footer = () => {
    return (
        <div className="relative bottom-0 mb-20">
            <p className="text-xl text-[#C05B33] font-bold text-center decoration-solid">
                Useful Links
            </p>
            <div className="flex px-auto justify-center pt-4">
                <ul className="flex space-x-3 py-auto">
                    <Link
                        href={"https://tools.darkventure.space/account/login/?next=/dashboard/"}
                        target="_blank"
                        className="text-[#429FBA] hover:text-white">
                        DKVC Tools
                    </Link>
                    <Link
                        href={"https://pf.darkventure.space/"}
                        target="_blank"
                        className="text-[#429FBA] hover:text-white">
                        DKVC Pathfinder
                    </Link>
                    <Link
                        href={
                            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSaCHnBRDw8Ki6nuamMzQv3InN978Zh7F6RcwlYdJHnlQkDrrdz5zrG3Of_8eoyxeqJimMHt9-7GjLn/pubhtml#"
                        }
                        target="_blank"
                        className="text-[#429FBA] hover:text-white">
                        WH ISK Guide
                    </Link>
                    <Link
                        href={
                            "https://www.youtube.com/watch?v=sP0hYYK3Tc8&list=PLk9inrh_er6Nx94sTw1sqRTvf0laDuHnG&pp=iAQB"
                        }
                        target="_blank"
                        className="text-[#429FBA] hover:text-white">
                        Small Gang Training
                    </Link>
                </ul>
            </div>
            <div className="text-center mt-4">
                <p className="text-xs">© 2023 Kitchen Sinkhole</p>
            </div>
        </div>
    );
};

export default footer;
