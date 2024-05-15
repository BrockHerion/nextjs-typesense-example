"use client";

import { Hits, SearchBox, Highlight, Snippet } from "react-instantsearch";
import InstantSearch from "./instant-search";
import { Movie } from "@/lib/types";

export default function HomeClient() {
  return (
    <InstantSearch>
      <div className="my-4">
        <SearchBox placeholder="Search movies..." />
      </div>
      <Hits<Movie>
        hitComponent={({ hit }) => (
          <div className="md:col-span-1 border border-gray-400 rounded-md h-full p-4 flex flex-col">
            <div className="flex flex-col items-center">
              <div className="text-base font-semibold">
                <Highlight attribute="title" hit={hit as any} />
              </div>
              <img
                src={hit.poster}
                alt={hit.title}
                className="w-32 h-auto my-6"
              />
            </div>

            <div className="text-sm text-gray-700 flex-1 mb-4">
              <Snippet attribute="overview" hit={hit as any} />
            </div>
            <div className="text-xs">
              Release date: {new Date(hit.release_date).toDateString()}
            </div>
            <div className="text-xs">Genres: {hit.genres.join(", ")}</div>
          </div>
        )}
      />
    </InstantSearch>
  );
}
