
import React from "react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  rating: number;
  oldPrice?: number;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  rating, 
  oldPrice, 
  price, 
  image 
}) => {
  // Генерируем звезды рейтинга
  const stars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsDisplay = '';
    for (let i = 0; i < fullStars; i++) {
      starsDisplay += '★';
    }
    
    if (hasHalfStar) {
      starsDisplay += '⭐';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsDisplay += '☆';
    }
    
    return starsDisplay;
  };

  return (
    <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
      <div className="h-40 mb-3 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-yellow-500 mb-2">{stars()} ({rating})</p>
      <div className="flex justify-between items-center mb-3">
        <div>
          {oldPrice && <span className="line-through text-gray-400 mr-2">{oldPrice}₽/кг</span>}
          <span className="font-bold text-lg">{price}₽/кг</span>
        </div>
      </div>
      <Button className="w-full bg-green-500 hover:bg-green-600">В корзину</Button>
    </div>
  );
};

export default ProductCard;
