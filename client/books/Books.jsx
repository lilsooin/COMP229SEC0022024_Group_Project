import React, { useState } from 'react';

const booksData = {
  fiction: [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      image: '/bookimage/To_Kill_a_Mockingbird.jpg',
    },
    {
      title: 'Narnia',
      author: 'C.S. Lewis',
      year: 1950,
      image: '/bookimage/Narnia.jpg',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      image: '/bookimage/Hobbit.jpg',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      image: '/bookimage/Great_Gatsby.jpg',
    },
  ],
  nonFiction: [
    {
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      year: 1969,
      image: '/bookimage/I_Know_Why_the_Caged_Bird_Sings.jpg',
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      year: 2018,
      image: '/bookimage/Educated.jpg',
    },
    {
      title: 'Silent Spring',
      author: 'Rachel Carson',
      year: 1962,
      image: '/bookimage/Silent_Spring.jpg',
    },
    {
      title: 'Becoming',
      author: 'Michelle Obama',
      year: 2018,
      image: '/bookimage/Becoming.jpg',
    },
  ],
  sciFi: [
    {
      title: 'Dune',
      author: 'Frank Herbert',
      year: 1965,
      image: '/bookimage/Dune.jpg',
    },
    {
      title: 'A Journey to the Center of the Earth',
      author: 'Jules Verne',
      year: 1864,
      image: '/bookimage/Journey_to_the_Center_of_the_Earth.jpg',
    },
    {
      title: 'Ender Game',
      author: 'Orson Scott Card',
      year: 1985,
      image: '/bookimage/Enders_Game.jpg',
    },
  ],
};

const List = ({ genre }) => {
  const books = booksData[genre] || [];

  return (
    <div>
      <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)} Books</h2>
      <ul>
        {books.map((book) => (
          <li key={`${book.title}-${book.author}`}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
            {/* Always display the image if available */}
            {book.image && (
              <div>
                <img
                  src={book.image}
                  alt={`Cover of ${book.title}`}
                  style={{ width: '150px', marginTop: '10px' }}
                />
              </div>
            )}
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Books() {
  const [selectedGenre, setSelectedGenre] = useState('fiction');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <h3>Books</h3>
      <select onChange={handleGenreChange} value={selectedGenre}>
        <option value="fiction">Fiction</option>
        <option value="nonFiction">Non-Fiction</option>
        <option value="sciFi">Sci-Fi</option>
      </select>

      <List genre={selectedGenre} />
    </div>
  );
}