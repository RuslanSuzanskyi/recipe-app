'use client';

import { useState, useEffect } from 'react';
import { SearchFormProps } from '../lib/types';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const CUISINES = [
  'African', 'Asian', 'American', 'British', 'Cajun', 
  'Caribbean', 'Chinese', 'Eastern European', 'European',
  'French', 'German', 'Greek', 'Indian', 
  'Irish', 'Italian', 'Japanese', 'Jewish', 
  'Korean', 'Latin American', 'Mediterranean', 'Mexican', 
  'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 
  'Thai', 'Vietnamese'
];

export default function SearchForm({ searchParams, setSearchParams, onSubmit }: SearchFormProps) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      !!searchParams.query || 
      !!searchParams.cuisine || 
      !!searchParams.maxReadyTime
    );
  }, [searchParams]);

  return (
    <form 
      onSubmit={(e) => { 
        e.preventDefault(); 
        onSubmit(e); 
      }} 
      className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
    >
      <div className="space-y-6">
        <Input
          type="text"
          placeholder="Search recipes..."
          value={searchParams.query || ''}
          onChange={(value) => setSearchParams({ ...searchParams, query: value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <Select
          options={CUISINES.map((cuisine) => ({ value: cuisine, label: cuisine }))}
          value={searchParams.cuisine || ''}
          onChange={(value) => setSearchParams({ ...searchParams, cuisine: value })}
          placeholder="Select Cuisine"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <Input
          type="number"
          placeholder="Max preparation time (minutes)"
          value={searchParams.maxReadyTime || ''}
          onChange={(value) => setSearchParams({ ...searchParams, maxReadyTime: value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <Button
          type="submit"
          disabled={!isValid}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Search Recipes
        </Button>
      </div>
    </form>
  );
}