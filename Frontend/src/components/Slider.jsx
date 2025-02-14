// export default function Slider() {

    
//   let currentIndex = 0;
//   let intervalTime = 3000;
  
//   const slides = document.querySelectorAll('.image-slide');
//   const dots = document.querySelectorAll('.dot');
//   const totalSlides = slides.length;
//   const progressBar = document.querySelector('.progress-bar');
  
//   function showSlide(index) {
//       const slider = document.querySelector('.image-slider');
//       slider.style.transform = `translateX(-${100 * index}%)`;
//       updateDots(index);
//   }
//   function nextSlide() {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       showSlide(currentIndex);
//   }
//   function updateDots(index) {
//       dots.forEach((dot, i) => {
//           dot.classList.remove('active');
//           if (i === index) {
//               dot.classList.add('active');
//           }
//       });
//   }
//   function currentSlide(index) {
//       currentIndex = index;
//       showSlide(index);
//   }
  
//   setInterval(nextSlide, intervalTime);
  
//   document.addEventListener('DOMContentLoaded', () => {
//       showSlide(currentIndex);
//   });
//   return (
//       <section class="hero">
//           <div class="hero-overlay">
//               <div class="hero-text">
//                   <h1>Ipsum Dolor Si</h1>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
//                   <a href="#" class="read-more">Read More →</a>
//                   <div class="dot-navigation">
//                       <span class="dot" onclick="currentSlide(0)"></span>
//                       <span class="dot" onclick="currentSlide(1)"></span>
//                       <span class="dot" onclick="currentSlide(2)"></span>
//                       <span class="dot" onclick="currentSlide(3)"></span>
//                       <span class="dot" onclick="currentSlide(4)"></span>
//                       <span class="dot" onclick="currentSlide(5)"></span>
//                   </div>

//               </div>
//           </div>
//           <div class="hero-images">
//               <div class="image-slider">
//                   <div class="image-slide"><img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Book 1" /></div>
//                   <div class="image-slide"><img src="https://images.unsplash.com/photo-1616330682546-2468b2d8dd17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzfGVufDB8fDB8fHww" alt="Book 2" /></div>
//                   <div class="image-slide"><img src="https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww" alt="Book 3" /></div>
//                   <div class="image-slide"><img src="https://images.unsplash.com/photo-1608659597669-b45511779f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Book 4" /></div>
//                   <div class="image-slide"><img src="https://images.unsplash.com/photo-1522407183863-c0bf2256188c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fHww" alt="Book 5" /></div>
//               </div>
//           </div> 
//           </section>)
// }

import React, { useEffect, useState } from 'react';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;

  const slides = [
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1616330682546-2468b2d8dd17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1608659597669-b45511779f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1522407183863-c0bf2256188c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fHww"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Welcome To Biblios</h1>
          <p>Discover your next great read at Biblios, where stories come to life and your literary journey begins.Unleash your imagination with Biblios, your gateway to a world of captivating tales and timeless classics</p>
          <a href="/" className="read-more">Read More →</a>
          <div className="dot-navigation">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => showSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-images">
        <div className="image-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="image-slide" key={index}>
              <img src={slide} alt={`Book ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

