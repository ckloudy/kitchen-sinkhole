const ContentCard = ({ title, desc }) => {
    return (
        <div className="content_card p-10">
            <h2 className="text-xl font-bold mb-5 text-[#429FBA]">{title}</h2>
            <p className="text-sm secondaryFont">{desc}</p>
        </div>
    );
};

export default ContentCard;
