"use client";
import { Header } from "@/components/header";
import { ResultArea } from "@/components/results-area";
import { SearchBar } from "@/components/searchbar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="flex flex-wrap justify-between ">
        <Sidebar />
        <ResultArea />
      </div>
    </div>
  );
}
