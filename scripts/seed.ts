import Typesense from "typesense";

const client = new Typesense.Client({
  nodes: [
    {
      host: "localhost",
      port: 8108,
      protocol: "http",
    },
  ],
  apiKey: "xyz",
  connectionTimeoutSeconds: 600,
});

client
  .collections()
  .create({
    name: "movies",
    fields: [
      { name: "title", type: "string" },
      { name: "overview", type: "string" },
      { name: "release_date", type: "int32" },
      { name: "poster", type: "string" },
      { name: "genres", type: "string[]", facet: true },
    ],
    default_sorting_field: "release_date",
  })
  .then((data) => {
    console.log(data);
  });

// TODO: For some reason, the import method is not working as expected. Use the CLI to import instead
Bun.file("./data/movies.jsonl")
  .text()
  .then((movies) => {
    client
      .collections("movies")
      .documents()
      .import(movies, { action: "create" })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

client
  .collections("movies")
  .documents()
  .search({ q: "star wars", query_by: "title" })
  .then((data) => {
    console.log(data);
  });
