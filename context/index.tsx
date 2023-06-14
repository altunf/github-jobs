"use client";
import { createContext, useContext, useState } from "react";
import { jobs } from "@/services";

const JobsContext = createContext({});

export const JobsContextProvider = ({ children }: any) => {
  const [paginationFilter, setPaginationFilter]: any[] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);

  const jobFilter = (props: any) => {
    const filterJob: any = jobs.filter(
      props === searchTerm
        ? (el) =>
            el.company.toLowerCase() == searchTerm.toLowerCase() ||
            el.title.toLowerCase() == searchTerm.toLowerCase()
        : props === "full time"
        ? (el) => el.type.toLowerCase() == props
        : (el) => el.location.toLowerCase() == props
    );

    const paginationInitialValues = [
      filterJob[0],
      filterJob[1],
      filterJob[2],
      filterJob[3],
      filterJob[4],
    ];

    setPaginationFilter(paginationInitialValues);
    setFilter(filterJob);
  };

  return (
    <JobsContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filter,
        setFilter,
        jobFilter,
        paginationFilter,
        setPaginationFilter,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobsContext = () => useContext(JobsContext);
