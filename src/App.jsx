import { useState } from 'react';
import { nanoid } from 'nanoid'

import SplitScreen from './layout/SplitScreen';
import Cat from './components/Cat';
import Form from './components/Form';
import DashBoard from './components/DashBoard';

function App() {

  // React State
  const [cats, setCats] = useState([{ id: nanoid(), name: 'meme', country: 'Thailand', count: 0 }]);
  const [catName, setCatName] = useState('');
  const [catCountry, setCatCountry] = useState('');
  const [error, setError] = useState(false);

  // Handle Fn
  const removeCat = (id) => {
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  }
  const handleIncrease = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, count: cat.count + 1 };
      } else {
        return cat;
      }
    });

    setCats(newCats);
  };

  const handleDecrease = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id && cat.count > 0) {
        return { ...cat, count: cat.count - 1 };
      } else {
        return cat;
      }
    });

    setCats(newCats);
  }

  const handleReset = (id) => {
    const newCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, count: 0 };
      } else {
        return cat;
      }
    });

    setCats(newCats);
  }

  const handleCatName = (event) => {
    setCatName(event.target.value);
  }

  const handleCatCountry = (event) => {
    setCatCountry(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!catName || !catCountry) {
      setError(true);
      return;
    }

    let newCats = {
      id: nanoid(),
      name: catName,
      country: catCountry,
      count: 0,
    }

    setCats([...cats, newCats]);

    setCatName('');
    setCatCountry('');
    setError('');
  }

  const totalCount = cats.reduce((total, cat) => {
    return total + cat.count;
  }, 0);

  const highestClick = cats.reduce((acc, cat) => {
    return acc > cat.count ? acc : cat.count;
  }, 0);

  const leader = cats.find((cat) => cat.count === highestClick);

  const renderCats = cats.map((cat) =>
    <Cat
      key={cat.id}
      cat={cat}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleReset={handleReset}
      removeCat={removeCat}
    />);

  return (
    <SplitScreen>
      {/******** Left Side  *********/}
      <>
        {/* Form */}
        <Form
          catName={catName}
          catCountry={catCountry}
          handleCatName={handleCatName}
          handleCatCountry={handleCatCountry}
          handleSubmit={handleSubmit}
          error={error}
        />

        {/* Dash Board */}
        <DashBoard
          cats={cats}
          totalCount={totalCount}
          leader={leader}
          highestClick={highestClick}
        />
      </>

      {/******** Right Side  *********/}
      <div className='flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll'>
        {renderCats}
      </div>
    </SplitScreen>
  );
}

export default App;
