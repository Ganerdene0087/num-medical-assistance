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
  { pattern: /^\/order$/, name: "Цаг захиалах" },
  { pattern: /^\/order\/timetable$/, name: "Захиалсан цагууд" },
  { pattern: /^\/inspection$/, name: "Үзлэгийн жагсаалт" },
  { pattern: /^\/personalInfo$/, name: "Хувийн мэдээлэл" },
];

export const routeNameFinder = (route: string) => {
  const matchingRoute = routes.find(({ pattern }) => pattern.test(route));
  return matchingRoute ? matchingRoute.name : "";
};
