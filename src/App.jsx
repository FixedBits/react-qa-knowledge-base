import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app-container">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="content-area">{/* Q&A cards */}</div>
    </div>
  );
}
