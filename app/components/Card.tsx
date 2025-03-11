import Link from 'next/link';
import Image from 'next/image';
import { RecipeProps } from '../lib/types';

export default function Card({ recipe }: { recipe: RecipeProps }) {
  return (
    <article className="overflow-hidden flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="relative aspect-square">
        <Link href={`/recipes/${recipe.id}`}>     
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </div>
      <div className="p-5">
        <Link href={`/recipes/${recipe.id}`}>
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 font-sans">{recipe.title}</h2>
        </Link>
      </div>
    </article>
  );
}