// Packages
import { useState, useEffect } from "react";

// Components
import Card from "./utilities/Card";
import TableFavorite from "./dashboard/favorite/TableFavorite";

// Helper
import capitalizeText from "../helpers/capitalize";

// Services
import { getStats } from "../services/users";

// Data
import userStats from "../data/userStats.json";

export default function DashboardUser() {
  const [dbStats, setDbStats] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [flagVideos, setFlagVideos] = useState(false);

  const stats = userStats.map((stat, index) => ({
    ...stat,
    ...dbStats[index],
  }));

  // load user stats from database
  useEffect(() => {
    const statsController = new AbortController();
    getStats(statsController)
      .then((res) => setDbStats(res.data))
      .catch((err) => console.error(err));
  }, [flagVideos]);

  return (
    <article className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Dashboard</h1>

      <div className="flex flex-wrap gap-4 lg:flex-nowrap">
        {dbStats.length &&
          stats.map((stat, index) => (
            <Card
              classCSS="min-w-[300px] bg-primary py-2 px-6 rounded-lg"
              key={stat.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-y-2">
                <div className="flex flex-col gap-1">
                  <p>{stat.title}</p>
                  {index === 0 ? (
                    <p className="font-bold">{stat.favorite_count}</p>
                  ) : (
                    <p className="font-bold">
                      {capitalizeText(stat.plan || "None")}
                    </p>
                  )}
                </div>
                <img src={stat.logo} alt={stat.alt} className="h-[30px]" />
              </div>
            </Card>
          ))}
      </div>
      <TableFavorite
        filterText={filterText}
        setFilterText={setFilterText}
        flagVideos={flagVideos}
        setFlagVideos={setFlagVideos}
      />
    </article>
  );
}
