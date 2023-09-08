import React, { useContext, useState, useEffect } from "react";
import { ShopingContext } from "../Context/ContextShoping";
import { FiChevronDown } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import Cards from "../Components/Cards";
import { ContextoOscuro } from "../Context/ContextModoOscuro";

const Home = () => {
  const { products, categories } = useContext(ShopingContext);
  const [order, setOrder] = useState('');
  const [filters, setFilters] = useState('');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const {dark} = useContext(ContextoOscuro);
  useEffect(() => {
    
    let data = products;

    if (filters) {
      data = data.filter(p => p.category === filters);
    }

    if (search) {
      data = data.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }

 
    if (order === 'asc') {
      data = data.slice().sort((a, b) => a.title.localeCompare(b.title), 'es', { sensitivity: 'base' });
    } else if (order === 'des') {
      data = data.slice().sort((a, b) => b.title.localeCompare(a.title), 'es', { sensitivity: 'base' });
    }

   console.log(data);
    setFilteredData(data);
  }, [products, filters, search, order]);

  const getSelectCategories = () => {
    return (
      <select className="appearance-none h-full rounded-md border border-gray-300 pr-8 pl-2 py-1 focus:border-indigo-500 focus:outline-none" onChange={(e) => { setFilters(e.target.value) }}>
        <option value=''>All</option>
        {categories.map((element) => (
          <option key={element} value={element}>{element}</option>
        ))}
      </select>
    );
  };
  return (
    <div>
      <nav className= {dark? "bg-black shadow-md" : "bg-gray-200 shadow-md"}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center h-16 justify-center">
            <div className="flex items-center">
              <div className="relative mr-4">
                <select className="appearance-none h-full rounded-md border border-gray-300 pr-12 pl-2 py-1 focus:border-indigo-500 focus:outline-none" onChange={(e) => { setOrder(e.target.value) }}>
                  <option  value=''>Order by</option>
                  <option value='asc'>A-Z</option>
                  <option value='des'>Z-A</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <FiChevronDown className="w-4 h-4" />
                </span>
              </div>
              <div className="flex-1 max-w-xs mx-4">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <BiSearch className="w-5 h-5" />
                  </div>
                  <input id="search" value={search} className="block w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search..." type="search" onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
              <div className="relative ml-4 ">
                {getSelectCategories()}
                <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none ">
                  <FiChevronDown className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Cards data={filteredData} />
    </div>
  );
}

export default Home;