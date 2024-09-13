import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    onSearch(query);
  };

  return (
    <header className="bg-gray-800 p-4">
      <h1 className="text-white text-2xl">Movie Explorer</h1>
      <form onSubmit={handleSearch} className="mt-4">
        <input
          type="text"
          name="query"
          placeholder="Search for movies..."
          className="p-2 w-full md:w-1/3 text-black"
        />
      </form>
    </header>
  );
};

export default Header;
