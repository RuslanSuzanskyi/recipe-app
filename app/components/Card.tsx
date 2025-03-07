import Link from 'next/link';
import Image from 'next/image';
import { RecipeProps } from '../lib/types';

export default function Card({ recipe }: { recipe: RecipeProps }) {
  return (
    <article className="overflow-hidden flex flex-col border border-solid border-black/15">
      <div className="relative aspect-square">
        <Link href={`/recipes/${recipe.id}`}>     
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </Link>
      </div>
      <div className="p-[0.75rem]">
        <Link href={`/recipes/${recipe.id}`}>
          <h2 className="text-[1.125rem] font-bold font-sans">{recipe.title}</h2>
        </Link>
      </div>
    </article>
  );
}