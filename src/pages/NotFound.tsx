
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center max-w-lg">
          <div className="text-8xl font-bold text-green-500 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-gray-600 mb-8">
            Извините, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
