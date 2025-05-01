
import React from "react";
import { Button } from "./ui/button";

const Banner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-400 text-center py-16 px-4 text-white">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">СОЧНЫЕ СКИДКИ ДО 30%! 🍍</h1>
        <p className="text-xl mb-6">Наслаждайтесь летним вкусом круглый год!</p>
        <Button className="bg-white text-green-600 hover:bg-green-50">
          Выбрать фрукты
        </Button>
      </div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1457296898342-cdd24585d095?auto=format&fit=crop&w=1200&q=80')] 
                  bg-cover bg-center mix-blend-overlay opacity-20"
      ></div>
    </div>
  );
};

export default Banner;
