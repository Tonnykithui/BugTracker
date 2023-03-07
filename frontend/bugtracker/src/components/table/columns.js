import ColumnFilter from "./ColumnFilter";

export const ProjColumns = [
  {
    Header: "Project",
    accessor: "projectName",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Contributor",
    accessor: "Assigned",
    Filter: ColumnFilter,
    disableFilters: true,
  },
];
