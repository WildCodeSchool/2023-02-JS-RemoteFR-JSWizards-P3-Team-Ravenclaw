// Packages
import { useState, useEffect } from "react";

// Components
import Card from "./utilities/Card";

// Services
import { getStats } from "../services/users";

// Data
import userStats from "../data/userStats.json";

export default function DashboardUser() {
  const [dbStats, setDbStats] = useState([]);

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
  }, []);

  return (
    <article className="flex w-screen max-w-[calc(100vw-320px)] flex-col gap-8 px-[100px] py-8">
      <h1>Dashboard</h1>

      <div className="flex flex-wrap gap-4 lg:flex-nowrap">
        {dbStats.length &&
          stats.map((stat) => (
            <Card
              classCSS="min-w-[300px] bg-primary py-2 px-6 rounded-lg"
              key={stat.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-y-2">
                <div className="flex flex-col gap-1">
                  <p>{stat.title}</p>
                  <p className="font-bold">{stat.total}</p>
                </div>
                <img src={stat.logo} alt={stat.alt} className="h-[30px]" />
              </div>
            </Card>
          ))}
      </div>
    </article>
  );
}
