import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-16 text-center">
      <Image
        src="/wood-tile-logo.png"
        alt="Wood & Tile — Renovation & Property Maintenance"
        width={472}
        height={430}
        loading="eager"
        fetchPriority="high"
        className="h-auto w-64 sm:w-80"
      />
      <h1 className="mt-10 text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
        Coming soon
      </h1>
    </main>
  );
}
