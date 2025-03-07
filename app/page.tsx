'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchForm from './components/SearchForm';
import { SearchParamsProps } from './lib/types';
import Container from './components/Container';

export default function Home() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<SearchParamsProps>({
    query: '',
    cuisine: '',
    maxTime: ''
  });

  const handleSubmit = () => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-secondary">
        <h1 className="text-5xl font-bold text-center mb-8">
          Recipe Finder
        </h1>
        <div className="w-full max-w-2xl fade-in">
          <SearchForm 
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            onSubmit={handleSubmit}
          />
        </div>
      </div>  
    </Container>
  );
}