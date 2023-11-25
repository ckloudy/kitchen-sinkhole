"use client";

import { useEffect, useState } from "react";
import fetchStats from "../utils/api";
import Hero from "@/components/Hero";
import Activity from "@/components/Travel";
import Content from "@/components/Content";
import CTA from "@/components/CTA";
import Travel from "@/components/Travel";

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
        <div className="relative top-24">
            <Hero activePilots={activePilots} kills={kills} />
            <Travel regions={regions} systems={systems} />
            <Content />
            <CTA />
        </div>
    );
}
