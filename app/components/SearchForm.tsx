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
          className="w-full"
        />
        <Select
          options={CUISINES.map((cuisine) => ({ value: cuisine, label: cuisine }))}
          value={searchParams.cuisine || ''}
          onChange={(value) => setSearchParams({ ...searchParams, cuisine: value })}
          placeholder="Select Cuisine"
          className="w-full"
        />
        <Input
          type="number"
          placeholder="Max preparation time (minutes)"
          value={searchParams.maxReadyTime || ''}
          onChange={(value) => setSearchParams({ ...searchParams, maxReadyTime: value })}
          className="w-full"
        />
        <Button
          type="submit"
          disabled={!isValid}
          className="w-full mt-6 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors cursor-pointer"
        >
          Search Recipes
        </Button>
      </div>
    </form>
  );
}