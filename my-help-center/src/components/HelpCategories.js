"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HelpCategories({categories, setCategoriesEvent}) {
  
console.log("categories",categories);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get( `${process.env.NEXT_PUBLIC_BACKEND_URL}/cards`);
        setCategoriesEvent(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      {categories.map((category, index) => (
        <div
          key={index}
          className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow"
        >
          <h3 className="font-semibold text-xl mb-2 text-black">{category.title}</h3>
          <p className="text-gray-600">{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HelpCategories;
