let projects = [
  {
    name: "Content Marketing",
    number: 2,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Grant Writing",
    number: 1,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Websites",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Branding",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Interviews",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
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

