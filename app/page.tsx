"use client";
import { Header } from "@/components/header";
import { ResultArea } from "@/components/results-area";
import { SearchBar } from "@/components/searchbar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <SearchBar />
        <div className=" tablet:flex tablet:flex-wrap ">
          <Sidebar />
          <ResultArea />
        </div>
      </div>
    </div>
  );
}
