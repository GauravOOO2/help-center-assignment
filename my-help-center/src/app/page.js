"use client"
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import HelpCategories from '../components/HelpCategories';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const setCategoriesEvent = (e) =>{
    setCategories(e)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setCategoriesEvent={setCategoriesEvent} />
      <div className="flex-grow">
        <div className="bg-purple-100 text-center py-12">
          <h1 className="text-3xl font-semibold text-black">How can we help?</h1>
          <SearchBar 
          categories={categories}
            setCategoriesEvent={setCategoriesEvent}
          />
        </div>
        <HelpCategories 
          categories={categories}
          setCategoriesEvent={setCategoriesEvent}
        />
      </div>
      <Footer />
    </div>
  );
}
