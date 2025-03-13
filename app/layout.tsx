import Header from './components/Header';
import { RecipeProvider } from './context/RecipeContext';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <RecipeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>  
        </RecipeProvider>
      </body>
    </html>
  );
}