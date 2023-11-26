import ContentCard from "./ui/ContentCard";
import { contentCardsInfo, contentInfo } from "@/constants";

const Content = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full text-center mx-auto lg:mx-0">
                    <img
                        src="Images/pew-icon.png"
                        alt="ships exploding"
                        width={60}
                        height={60}
                        className="mb-8 mx-auto"
                    />
                    <h2 className="text-3xl border-b-2 pb-8">{contentInfo.heading}</h2>
                </div>
                {contentCardsInfo.map((item, i) => {
                    return <ContentCard title={item.title} desc={item.desc} key={i} />;
                })}
                <div className="lg:col-span-2 my-auto mx-auto p-10 text-center">
                    <h2 className="text-xl lg:text-2xl font-bold mb-2">{contentInfo.srp}</h2>
                    <p className="text-sm lg:text-md">{contentInfo.message}</p>
                </div>
            </div>
        </section>
    );
};

export default Content;
