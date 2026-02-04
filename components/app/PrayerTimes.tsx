"use client";
import { useEffect, useMemo, useState } from "react";

type Times = {
  fajr: Date;
  sunrise: Date;
  dhuhr: Date;
  asr: Date;
  maghrib: Date;
  isha: Date;
};

function toHM(d: Date) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function sampleTimes(date: Date): Times {
  const base = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return {
    fajr: new Date(base.getTime() + (5 * 60 + 30) * 60 * 1000),
    sunrise: new Date(base.getTime() + (6 * 60 + 45) * 60 * 1000),
    dhuhr: new Date(base.getTime() + (12 * 60 + 30) * 60 * 1000),
    asr: new Date(base.getTime() + (15 * 60 + 45) * 60 * 1000),
    maghrib: new Date(base.getTime() + (18 * 60 + 15) * 60 * 1000),
    isha: new Date(base.getTime() + (19 * 60 + 45) * 60 * 1000),
  };
}

function nextPrayer(times: Times, now = new Date()) {
  const seq: Array<{ name: string; time: Date }> = [
    { name: "Fajr", time: times.fajr },
    { name: "Sunrise", time: times.sunrise },
    { name: "Dhuhr", time: times.dhuhr },
    { name: "Asr", time: times.asr },
    { name: "Maghrib", time: times.maghrib },
    { name: "Isha", time: times.isha },
  ];
  const upcoming = seq.find((p) => p.time > now) ?? {
    name: "Fajr",
    time: new Date(times.fajr.getTime() + 24 * 60 * 60 * 1000),
  };
  const diffMin = Math.floor((upcoming.time.getTime() - now.getTime()) / (1000 * 60));
  const h = Math.floor(diffMin / 60);
  const m = diffMin % 60;
  return { label: upcoming.name, timeString: h > 0 ? `${h}h ${m}m` : `${m}m` };
}

export default function PrayerTimes() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [times, setTimes] = useState<Times | null>(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setCoords({ lat: 40.7128, lon: -74.006 });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => setCoords({ lat: 40.7128, lon: -74.006 }),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, []);

  useEffect(() => {
    // For now, mirror the simplified calculation from script.js
    setTimes(sampleTimes(new Date()));
  }, [coords]);

  const next = useMemo(() => (times ? nextPrayer(times) : null), [times]);

  if (!times) {
    return (
      <div className="rounded-2xl border border-white/50 bg-white/70 p-6">
        <p className="text-emerald/70">Loading prayer times…</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-white/50 bg-white/70 p-6">
        <h4 className="font-heading text-emerald text-xl">Today</h4>
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-emerald/85">
          <span>Fajr</span><span>{toHM(times.fajr)}</span>
          <span>Sunrise</span><span>{toHM(times.sunrise)}</span>
          <span>Dhuhr</span><span>{toHM(times.dhuhr)}</span>
          <span>Asr</span><span>{toHM(times.asr)}</span>
          <span>Maghrib</span><span>{toHM(times.maghrib)}</span>
          <span>Isha</span><span>{toHM(times.isha)}</span>
        </div>
      </div>

      <div className="rounded-2xl border border-white/50 bg-white/70 p-6 flex flex-col justify-between">
        <div>
          <h4 className="font-heading text-emerald text-xl">Next Prayer</h4>
          <p className="mt-2 text-emerald/85">{next ? `Next: ${next.label} in ${next.timeString}` : "Calculating…"}</p>
        </div>
        <p className="mt-6 text-sm text-emerald/60">Location: {coords ? `${coords.lat.toFixed(3)}, ${coords.lon.toFixed(3)}` : "Detecting…"}</p>
      </div>

      <div className="rounded-2xl border border-white/50 bg-white/70 p-6">
        <h4 className="font-heading text-emerald text-xl">Dates</h4>
        <div className="mt-3 text-emerald/85">
          <p className="font-medium">Gregorian: <span id="gregorianDateReact"></span></p>
          <p className="font-medium mt-1">Hijri: <span id="hijriDateReact"></span></p>
        </div>
      </div>
    </div>
  );
}
