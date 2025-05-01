
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./ui/Icon";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="logo text-2xl font-bold flex items-center gap-2">
        <span>🍊 FRUIT PARTY</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-green-100 transition-colors">
          Главная
        </Link>
        <Link to="/catalog" className="hover:text-green-100 transition-colors">
          Каталог
        </Link>
        <Link to="/sales" className="hover:text-green-100 transition-colors">
          Акции
        </Link>
        <Button variant="ghost" className="text-white" size="icon">
          <Icon name="ShoppingCart" size={20} />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
