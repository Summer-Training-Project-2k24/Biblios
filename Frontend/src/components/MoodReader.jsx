// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const MoodButton = styled.button`
//   position: fixed;
//   bottom: 30px;
//   right: 30px;
//   z-index: 1000;
//   width: 70px;
//   height: 70px;
//   background-color: #FF6B35;
//   color: white;
//   border: none;
//   border-radius: 50%;
//   cursor: pointer;
//   font-size: 28px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 6px 12px rgba(255, 107, 53, 0.3);
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #FF8C61;
//     transform: scale(1.1);
//   }
// `;

// const Sidebar = styled.div`
//   position: fixed;
//   z-index:99;
//   right: ${props => props.active ? '0' : '-350px'};
//   top: 70px;
//   width: 350px;
//   height: 97%;
//   background-color: #FFFFFF;
//   transition: 0.3s ease-in-out;
//   padding: 30px;
//   box-sizing: border-box;
//   border-radius : 15px;
//   box-shadow: -5px 0 15px rgba(0,0,0,0.1);
//   overflow-y: auto;
// `;

// const SidebarTitle = styled.h2`
//   color: #FF6B35;
//   margin-bottom: 30px;
//   font-weight: 600;
//   font-size: 28px;
// `;

// const MoodInput = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 20px;
//   box-sizing: border-box;
//   border: 2px solid #FF6B35;
//   border-radius: 25px;
//   font-size: 16px;
//   outline: none;
//   transition: all 0.3s ease;

//   &:focus {
//     box-shadow: 0 0 8px rgba(255, 107, 53, 0.5);
//   }
// `;

// const SuggestButton = styled.button`
//   background-color: #FF6B35;
//   color: white;
//   border: none;
//   padding: 12px 20px;
//   cursor: pointer;
//   width: 100%;
//   border-radius: 25px;
//   font-size: 18px;
//   font-weight: 600;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #FF8C61;
//     transform: translateY(-2px);
//     box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
//   }
// `;

// const BookSuggestion = styled.div`
//   background-color: #FFF0EB;
//   padding: 15px;
//   margin-bottom: 15px;
//   border-radius: 10px;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 5px 15px rgba(255, 107, 53, 0.2);
//   }

//   h3 {
//     color: #FF6B35;
//     margin: 0 0 5px 0;
//   }

//   p {
//     color: #666;
//     margin: 0;
//   }
// `;

// function MoodReader() {
//   const [sidebarActive, setSidebarActive] = useState(false);
//   const [mood, setMood] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarActive(!sidebarActive);
//   };

//   const handleMoodChange = (e) => {
//     setMood(e.target.value);
//   };

//   const getBookSuggestions = async (mood) => {
//     // Simulating API call
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve([
//           { title: "Joyful Living", author: "Emma Bright", description: "A heartwarming tale of finding happiness in everyday moments." },
//           { title: "Serene Thoughts", author: "Michael Calm", description: "Meditative essays to bring peace to your busy life." },
//           { title: "Thrilling Horizons", author: "Alex Adventure", description: "An exciting journey across uncharted territories." }
//         ]);
//       }, 1500);
//     });
//   };

//   const handleSuggest = async () => {
//     if (mood) {
//       setLoading(true);
//       try {
//         const bookSuggestions = await getBookSuggestions(mood);
//         setSuggestions(bookSuggestions);
//       } catch (error) {
//         console.error('Failed to get suggestions:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <>
//       <MoodButton onClick={toggleSidebar}>📚</MoodButton>
//       <Sidebar active={sidebarActive}>
//         <SidebarTitle>Mood Reader</SidebarTitle>
//         <MoodInput
//           type="text"
//           placeholder="How are you feeling today?"
//           value={mood}
//           onChange={handleMoodChange}
//         />
//         <SuggestButton onClick={handleSuggest}>Discover Books</SuggestButton>
//         <div>
//           {loading && <p>Finding perfect books for your mood...</p>}
//           {!loading && suggestions.map((book, index) => (
//             <BookSuggestion key={index}>
//               <h3>{book.title}</h3>
//               <p><strong>By {book.author}</strong></p>
//               <p>{book.description}</p>
//             </BookSuggestion>
//           ))}
//         </div>
//       </Sidebar>
//     </>
//   );
// }

// export default MoodReader;
import React, { useState } from 'react';
import styled from 'styled-components';

const MoodButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  width: 70px;
  height: 70px;
  background-color: #FF6B35;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 12px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF8C61;
    transform: scale(1.1);
  }
`;

const Sidebar = styled.div`
  position: fixed;
  z-index: 99;
  right: ${props => props.active ? '0' : '-350px'};
  top: 70px;
  width: 350px;
  height: 97%;
  background-color: #FFFFFF;
  transition: 0.3s ease-in-out;
  padding: 30px;
  box-sizing: border-box;
  border-radius : 15px;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  overflow-y: auto;
`;

const SidebarTitle = styled.h2`
  color: #FF6B35;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 28px;
`;

const MoodInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 2px solid #FF6B35;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 8px rgba(255, 107, 53, 0.5);
  }
`;

const SuggestButton = styled.button`
  background-color: #FF6B35;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF8C61;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
  }
`;

const BookSuggestion = styled.div`
  background-color: #FFF0EB;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.2);
  }

  h3 {
    color: #FF6B35;
    margin: 0 0 5px 0;
  }

  p {
    color: #666;
    margin: 0;
  }
`;

function MoodReader() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [mood, setMood] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const getBookSuggestions = async (mood) => {
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood }),
      });
      const data = await response.json();
      return data.recommendation;
    } catch (error) {
      console.error('Failed to get suggestions:', error);
      return [];
    }
  };

  const handleSuggest = async () => {
    if (mood) {
      setLoading(true);
      try {
        const bookSuggestions = await getBookSuggestions(mood);
        setSuggestions([bookSuggestions]); // Assuming API returns a single string with book recommendations
      } catch (error) {
        console.error('Failed to get suggestions:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <MoodButton onClick={toggleSidebar}>📚</MoodButton>
      <Sidebar active={sidebarActive}>
        <SidebarTitle>Mood Reader</SidebarTitle>
        <MoodInput
          type="text"
          placeholder="How are you feeling today?"
          value={mood}
          onChange={handleMoodChange}
        />
        <SuggestButton onClick={handleSuggest}>Discover Books</SuggestButton>
        <div>
          {loading && <p>Finding perfect books for your mood...</p>}
          {!loading && suggestions.map((suggestion, index) => (
            <BookSuggestion key={index}>
              <h3>Recommendation</h3>
              <p>{suggestion}</p>
            </BookSuggestion>
          ))}
        </div>
      </Sidebar>
    </>
  );
}

export default MoodReader;
