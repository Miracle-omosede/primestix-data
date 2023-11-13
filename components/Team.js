"use client";

import React, { useEffect, useState } from "react";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchTeamData = async () => {
      const response = await fetch(`/api/team`);
      const data = await response.json();

      setTeams(data);
    };

    fetchTeamData();
  }, []);
  return (
    <div>
      {teams.map((team) => (
        <>
          <div key={team._id}>{JSON.stringify(team)}</div>
          <Image
            src={urlFor(team.coverImage).url()}
            alt="team"
            width={100}
            height={200}
          />

          {JSON.stringify(urlFor(team.coverImage).url())}
        </>
      ))}
    </div>
  );
};

export default Team;
