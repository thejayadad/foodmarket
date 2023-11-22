'use client'
// components/MenuSection.js
import { motion } from 'framer-motion';

const MenuSection = () => {
  const menuItems = [
    { id: 1, name: 'Salmon', price: '$19.99', image: 'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, name: 'Lobster Tail', price: '$29.99', image: '/lobster.jpg' },
    { id: 3, name: 'Seafood Platter', price: '$24.99', image: '/platter.jpg' },
  ];

  return (
    <div className=" py-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-center mb-8"
      >
        <h1>Our Menu</h1>
        <p className="text-lg md:text-xl">Delicious seafood options just for you</p>
      </motion.div>
 
      <div className="flex flex-wrap justify-center">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: item.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black rounded-lg p-2 m-4 w-[500px] md:w-[500px] h-[600px] md:h-[600px] flex flex-col items-center relative overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-96 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-md md:text-lg mb-4">{item.price}</p>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="text-primary cursor-pointer"
            >
              🛒
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
