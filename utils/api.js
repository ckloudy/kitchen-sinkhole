// Api call to zkillborad for killmails, active pilots, regions and systems

const fetchStats = async () => {
    const res = await fetch("https://zkillboard.com/api/stats/corporationID/98575203/", {
        next: { revalidate: 14400 },
    });
    const data = await res.json();
    const date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    const stats = {
        kills: data.months[`${currentYear}${currentMonth}`].shipsDestroyed,
        activePilots: data.activepvp.characters.count,
        regions: data.activepvp.regions.count,
        systems: data.activepvp.systems.count,
    };
    return stats;
};

export default fetchStats;
