
import React from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  icon: string;
  name: string;
  link: string;
}

const Category: React.FC<CategoryProps> = ({ icon, name, link }) => {
  return (
    <Link to={link} className="flex flex-col items-center p-4 hover:bg-green-50 rounded-lg transition-colors">
      <span className="text-4xl mb-2">{icon}</span>
      <span className="text-gray-800 font-medium">{name}</span>
    </Link>
  );
};

const Categories: React.FC = () => {
  return (
    <div className="flex justify-around py-8 px-4 bg-gray-50">
      <Category icon="🍎" name="Свежие фрукты" link="/category/fresh" />
      <Category icon="🥝" name="Экзотика" link="/category/exotic" />
      <Category icon="🍒" name="Ягоды" link="/category/berries" />
    </div>
  );
};

export default Categories;
