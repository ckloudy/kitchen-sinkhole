const Activity = ({ stats }) => {
    return (
        <section>
            <div>
                {/* <img src="" alt="" /> */}
                <h2>The beauty of wormhole living is that we fly all over NEW EDEN.</h2>
                <p>We've racked up kills across</p>
                <div>
                    <p>{stats.regions}</p>
                    <p>REGIONS</p>
                    <p>Last 7 days</p>
                </div>
                <div>
                    <p>{stats.systems}</p>
                    <p>SYSTEMS</p>
                    <p>Last 7 days</p>
                </div>
            </div>
        </section>
    );
};

export default Activity;
