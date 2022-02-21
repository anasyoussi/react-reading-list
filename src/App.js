import React from 'react'; 
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';
import ThemeToggle from './Components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
