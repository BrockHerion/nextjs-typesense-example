import HomeClient from "./page-client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <h1 className="text-3xl mb-6">TypeSense + React InstantSearch</h1>
        <h2 className="text-2xl mb-4">
          Search in hit movies{" "}
          <span role="img" aria-label="emoji">
            🎥
          </span>
        </h2>
        <p>
          This is a sample movie dataset for demo purpose. Enjoy searching with
          TypeSense!
        </p>
        <HomeClient />
      </div>
    </main>
  );
}
