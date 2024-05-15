"use client";

import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { InstantSearch as ReactInstantSearch } from "react-instantsearch";

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: 8108,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title",
  },
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

export default function InstantSearch({ children }: { children: any }) {
  return (
    <ReactInstantSearch searchClient={searchClient} indexName="movies">
      {children}
    </ReactInstantSearch>
  );
}
