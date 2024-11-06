import ContentCard from "./ui/ContentCard";
import { contentCardsInfo, contentInfo } from "@/constants";

const Content = () => {
    return (
        <section>
            <h2 className="pb-12 text-3xl text-center">{contentInfo.heading}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* <img
                    src="Images/pew-icon.png"
                    alt="ships exploding"
                    width={60}
                    height={60}
                    className="mx-auto mb-8"
                /> */}

                {/* <div className="w-full mx-auto text-center lg:mx-0"></div> */}
                {contentCardsInfo.map((item, i) => {
                    return <ContentCard title={item.title} desc={item.desc} key={i} />;
                })}
                {/* <div className="p-10 mx-auto my-auto text-center lg:col-span-2">
                    <h2 className="mb-2 text-xl font-bold lg:text-2xl">{contentInfo.srp}</h2>
                    <p className="text-sm lg:text-md">{contentInfo.message}</p>
                </div> */}
            </div>
        </section>
    );
};

export default Content;
