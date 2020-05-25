import React, { useEffect, useState } from "react";

const Results = ({ points }) => {
  const [result, setResult] = useState({ order: [] });

  useEffect(() => {
    const calculateWay = () => {
      const visited = points.filter(point => point.starting);
      const notVisited = points.filter(point => !point.starting);
      let total = 0;
      while (notVisited.length) {
        let closest = { index: 0, distance: Number.MAX_SAFE_INTEGER };

        for (let index in notVisited) {
          const distance = calculateDistance(visited[visited.length - 1], notVisited[index]);

          if (distance < closest.distance) closest = { index, distance };
        }

        visited.push({ ...notVisited[closest.index], distance: Math.round(closest.distance * 100) / 100 });
        total += Math.round(closest.distance * 100) / 100;
        notVisited.splice(closest.index, 1);
      }

      const backDistance = calculateDistance(visited[visited.length - 1], visited[0]);
      visited.push({ ...visited[0], distance: Math.round(backDistance * 100) / 100 });
      total += Math.round(backDistance * 100) / 100;

      setResult({ order: visited, total });
    };

    if (points.length) {
      calculateWay();
    }
  }, [points]);

  const calculateDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + (Math.pow(p2.y - p1.y, 2)));
  };

  return !result.order.length ? null : (
    <div style={{ borderWidth: 2, borderColor: "gray", padding: 10, margin: 40, borderStyle: "solid" }}>
      Odległość: {result.total}
      <br /><br />
      {result.order.map((point, index) => (
        <div key={index}>
          {index + 1}. {point.x}:{point.y}
        </div>
      ))

      }
    </div>
  );
};

export default Results;
