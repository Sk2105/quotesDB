const routes = [
  {
    name: "Get All Quotes",
    route: "/api/quotes",
    description: "Get All Quotes. (eg: http://localhost:3000/api/quotes) ",
    link: "http://localhost:3000/api/quotes",
    query: [
      {
        name: "author",
        description:
          "Get Quotes By Author. (eg: http://localhost:3000/api/quotes?author=author)",
      },
      {
        name: "category",
        description:
          "Get Quotes By Category. (eg: http://localhost:3000/api/quotes?category=category)",
      },
    ],
  },
  {
    name: "Get Quotes By Id",
    route: "/api/quotes/[id]",
    description: "Get Quotes By Id. (eg: http://localhost:3000/api/quotes/1)",
    link: "http://localhost:3000/api/quotes/1",
  },

  {
    name: "Get Random Quotes",
    route: "/api/quotes/random",
    description:
      "Get Random Quotes. (eg: http://localhost:3000/api/quotes/random)",
    link: "http://localhost:3000/api/random",
  },
];

export default routes;
