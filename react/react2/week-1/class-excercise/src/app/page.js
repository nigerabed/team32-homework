import NasaMarsRover from "@/components/NasaMars/NasaMarsRover";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Nasa Rover Photos</h1>
        <NasaMarsRover />
        <button>
          <Link href="/about">
            Go to about page
          </Link>
        </button>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
