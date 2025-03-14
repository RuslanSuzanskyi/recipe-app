"use client";

import Link from "next/link";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

export default function Header() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    if (!searchTerm.trim()) return;

    router.push(`/recipes?query=${searchTerm}`);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <Container>
        <nav className="flex items-center justify-between gap-4 min-h-16">
          <Link href="/" className="text-2xl sm:text-3xl lg:text-4xl">Home</Link>
          <form onSubmit={handleSearch} className="w-full max-w-lg sm:max-w-md xs:max-w-xs min-w-[180px]">
            <div className="relative">
              <Input
                type="text"
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search"
                className="block w-full p-4 ps-6 sm:ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </nav>  
      </Container>
    </header>
  );
}
