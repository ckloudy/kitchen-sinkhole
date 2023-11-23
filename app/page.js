"use client";

import { useEffect, useState } from "react";
import fetchStats from "../utils/api";
import Hero from "@/components/Hero";
import Activity from "@/components/Activity";
import Content from "@/components/Content";
import CTA from "@/components/CTA";

export default function Home() {
    useEffect(() => {
        fetchStats().then((stats) => {
            setKills(stats.kills);
            setActivePilots(stats.activePilots);
            setRegions(stats.regions);
            setSystems(stats.systems);
        });
    }, []);

    const [kills, setKills] = useState();
    const [activePilots, setActivePilots] = useState();
    const [regions, setRegions] = useState();
    const [systems, setSystems] = useState();

    return (
        <div className="relative top-48">
            <Hero stats={{ activePilots: activePilots, kills: kills }} />
            <Activity stats={{ systems: systems, regions: regions }} />
            <Content />
            <CTA />
        </div>
    );
}
