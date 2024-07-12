import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './tags.css';

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tags'); // Replace with your API endpoint
        setTags(response.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="tags-container">
      {tags.length > 0 && (
        <div className="tags">
          {tags.map((tag) => (
            <Link key={tag.name} to={`/tag/${tag.name}`} className="tag-link">
              {tag.name} ({tag.count})
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tags;

//App.js file function for the tags component to work
// function App() {
//     return (
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Tags />} />
//             <Route path="/tag/:tagName" element={<BooksByTag />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
