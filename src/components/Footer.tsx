
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-4">О нас</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-green-300 transition-colors">О компании</Link></li>
            <li><Link to="/delivery" className="hover:text-green-300 transition-colors">Доставка</Link></li>
            <li><Link to="/blog" className="hover:text-green-300 transition-colors">Наш блог</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Контакты</h3>
          <ul className="space-y-2">
            <li>Телефон: +7 (123) 456-78-90</li>
            <li>Email: info@fruitparty.ru</li>
            <li>Адрес: ул. Фруктовая, 123</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Помощь</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-green-300 transition-colors">Вопросы и ответы</Link></li>
            <li><Link to="/return" className="hover:text-green-300 transition-colors">Возврат товара</Link></li>
            <li><Link to="/support" className="hover:text-green-300 transition-colors">Служба поддержки</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
        <p>© 2025 Fruit Party — Магазин фруктов. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
