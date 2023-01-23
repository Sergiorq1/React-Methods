import './App.css';
import data, { uniqueCategories }from './data';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import Header from './Header';
import { useState } from 'react';
function App() {
  const [category, setCategory] = useState('Kids')

  return (
    <div className="App">
      <Header 
        title='Productify'
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CategoryList 
        category={category}
        onClick={newCategory => setCategory(newCategory)}
        />
      <ProductList 
        category={category}/>
    </div>
  );
}

export default App;
