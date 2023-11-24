const ContentCard = ({ title, desc }) => {
    return (
        <div className="p-10 text-center backdrop-blur-sm border-2 border-slate-600 bg-[#091118] bg-opacity-80 rounded-md">
            <h2 className="text-lg font-bold mb-5">{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default ContentCard;
