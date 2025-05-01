
import React from "react";
import ProductCard from "./ProductCard";

// Демо-данные для товаров
const productsData = [
  {
    id: 1,
    title: "Манго спелое",
    rating: 4.5,
    oldPrice: 299,
    price: 199,
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Киви зеленый",
    rating: 4.2,
    price: 159,
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Яблоки Гренни Смит",
    rating: 4.7,
    oldPrice: 189,
    price: 129,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Ананас",
    rating: 4.3,
    price: 229,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80"
  }
];

const Products: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Популярные товары</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            rating={product.rating}
            oldPrice={product.oldPrice}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
