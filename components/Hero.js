import HeroMain from "./ui/HeroMain";
import HeroCard from "./ui/HeroCard";

const Hero = ({ activePilots, kills }) => {
    return (
        <section>
            <HeroMain />
            <HeroCard activePilots={activePilots} kills={kills} />
        </section>
    );
};

export default Hero;
