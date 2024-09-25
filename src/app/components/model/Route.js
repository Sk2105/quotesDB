const routes = [
  {
    name: "Get All Quotes",
    route: "/api/quotes",
    description:
      "Get All Quotes. (eg: https://quotes-db.vercel.app/api/quotes) ",
    link: "https://quotes-db.vercel.app/api/quotes",
    query: [
      {
        name: "author",
        description:
          "Get Quotes By Author. (eg: https://quotes-db.vercel.app/api/quotes?author=author)",
      },
      {
        name: "category",
        description:
          "Get Quotes By Category. (eg: https://quotes-db.vercel.app/api/quotes?category=category)",
      },
    ],
  },
  {
    name: "Get Quotes By Id",
    route: "/api/quotes/[id]",
    description:
      "Get Quotes By Id. (eg: https://quotes-db.vercel.app/api/quotes/1)",
    link: "https://quotes-db.vercel.app/api/quotes/1",
  },

  {
    name: "Get Random Quotes",
    route: "/api/random",
    description:
      "Get Random Quotes. (eg: https://quotes-db.vercel.app/api/random)",
    link: "https://quotes-db.vercel.app/api/random",
  },

  {
    name: "Get All Authors",
    route: "/api/authors",
    description:
      "Get All Authors. (eg: https://quotes-db.vercel.app/api/authors)",
    link: "https://quotes-db.vercel.app/api/authors",
  },

  {
    name: "Get All Categories",
    route: "/api/categories",
    description:
      "Get All Categories. (eg: https://quotes-db.vercel.app/api/categories)",
    link: "https://quotes-db.vercel.app/api/categories",
  },
];

export default routes;
