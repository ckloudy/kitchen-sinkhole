import Image from "next/image";
import ContentCard from "./ui/ContentCard";
import { contentCardsInfo, contentInfo } from "@/constants";

const Content = () => {
    return (
        <section className="grid grid-cols-3 gap-8 mb-28">
            <div className="w-3/4">
                <Image
                    src="/pew-icon.png"
                    alt="ships exploding"
                    width={60}
                    height={60}
                    className="mb-8"
                />
                <h2 className="text-4xl border-b-2 pb-8">{contentInfo.heading}</h2>
            </div>
            {contentCardsInfo.map((item, i) => {
                return <ContentCard title={item.title} desc={item.desc} key={i} />;
            })}
            <div className="col-span-2 text-center my-auto mx-auto">
                <h2 className="text-2xl font-bold mb-2">{contentInfo.srp}</h2>
                <p>{contentInfo.message}</p>
            </div>
        </section>
    );
};

export default Content;
