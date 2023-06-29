"use client";

import Card from "./components/weather-card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <Card />
      </div>
    </>
  );
}
