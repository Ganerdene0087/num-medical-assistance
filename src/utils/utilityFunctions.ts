export const dateFormatter = (date: string) => {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toISOString().slice(0, 16).replace("T", " ");
  return formattedDate;
};

interface Route {
  pattern: RegExp;
  name: string;
}

export const pathFinder = (role: string) => {
  const rolePaths: { [key: string]: string } = {
    root: "/news/",
    podcast: "/podcast/",
    shop: "/shop/",
    publisher: "/publisher/news/",
  };

  return rolePaths[role] || "/";
};

const routes: Route[] = [
  { pattern: /^\/appointment$/, name: "Цаг захиалга" },
  { pattern: /^\/order\/timetable$/, name: "Захиалсан цагууд" },
  { pattern: /^\/inspection$/, name: "Үзлэгийн жагсаалт" },
  {
    pattern: /^\/inspection\/detail\/[a-zA-Z0-9]+$/,
    name: "Үзлэгийн дэлгэрэнгүй",
  },
  {
    pattern: /^\/treatment\/detail\/[a-zA-Z0-9]+$/,
    name: "Эмчилгээний дэлгэрэнгүй",
  },
  { pattern: /^\/blog$/, name: "Нийтлэл" },
  { pattern: /^\/absent$/, name: "Цахим акт" },
  { pattern: /^\/treatment$/, name: "Эмчилгээ" },
];

export const routeNameFinder = (route: string) => {
  const matchingRoute = routes.find(({ pattern }) => pattern.test(route));
  return matchingRoute ? matchingRoute.name : "";
};
