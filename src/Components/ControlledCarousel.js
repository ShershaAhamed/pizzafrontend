import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e3917bd-0936-4ffd-9898-76f7adee9880/de3f580-5e6d7361-82bc-40db-b5df-7c8c753c1118.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMzkxN2JkLTA5MzYtNGZmZC05ODk4LTc2ZjdhZGVlOTg4MFwvZGUzZjU4MC01ZTZkNzM2MS04MmJjLTQwZGItYjVkZi03YzhjNzUzYzExMTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hRbSV3oJ8khMcwFMjwwdVjPA1b8CCHS-4WqYz1bqk5Y"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-cover-design-template-1e1da5ae6c9845553b8adad118df06ad_screen.jpg?ts=1621932720"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://img.freepik.com/psd-gratuit/menu-nourriture-modele-banniere-web-delicieuses-pizzas_106176-421.jpg?w=2000"
          alt="Third slide"
        />

        {/* https://www.pizzaah.com/images/slider-3.jpg */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;