let projects = [
  {
    name: "Ingram Micro",
    number: 2,
    id: 101,
    amount: "$10,800",
    due: "12/05/1995",
    category: "content marketing"
  },
  {
    name: "National Hemophilia Association",
    number: 1,
    id: 102,
    amount: "$3.2 million",
    due: "10/31/2000",
    category: "grant writing"
  },
  {
    name: "Websites",
    number: 2003,
    id: 103,
    amount: "$9,500",
    due: "07/22/2003",
    category: "landing pages"
  },
  {
    name: "Benefiber",
    id: 104,
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
    category: "branding"

  },
  {
    name: "Interviews",
    number: 1998,
    id: 105,
    amount: "$4,600",
    due: "01/27/2998",
    category: "growth marketing"
  }
];

export function getProjects() {
  return projects;
}

export function getProject(number) {
  return projects.find(
    project => project.number === number
  );
}


