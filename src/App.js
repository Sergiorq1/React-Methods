import './App.css';
import data, { allCategories, uniqueCategories, categoriesAndCounts, namesAndCategories }from './data';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
      {namesAndCategories.map(obj => {
        return (
          <button>
            {obj.name}
            <span> {obj.count}</span>
          </button>

        )
      })}
      </div>
      <ProductList/>
    </div>
  );
}

export default App;
