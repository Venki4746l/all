import React, { useState } from "react";
const data = [
  { id: 1, name: "User 1", favoriteGame: "Game D" },
  { id: 2, name: "User 2", favoriteGame: "Game D" },
  { id: 3, name: "User 3", favoriteGame: "Game E" },
  { id: 4, name: "User 4", favoriteGame: "Game E" },
  { id: 5, name: "User 5", favoriteGame: "Game C" },
  { id: 6, name: "User 6", favoriteGame: "Game D" },
  { id: 7, name: "User 7", favoriteGame: "Game E" },
  { id: 8, name: "User 8", favoriteGame: "Game C" },
  { id: 9, name: "User 9", favoriteGame: "Game A" },
  { id: 10, name: "User 10", favoriteGame: "Game C" },
  { id: 11, name: "User 11", favoriteGame: "Game A" },
  { id: 12, name: "User 12", favoriteGame: "Game D" },
  { id: 13, name: "User 13", favoriteGame: "Game A" },
  { id: 14, name: "User 14", favoriteGame: "Game C" },
  { id: 15, name: "User 15", favoriteGame: "Game E" },
  { id: 16, name: "User 16", favoriteGame: "Game C" },
  { id: 17, name: "User 17", favoriteGame: "Game A" },
  { id: 18, name: "User 18", favoriteGame: "Game E" },
  { id: 19, name: "User 19", favoriteGame: "Game D" },
  { id: 20, name: "User 20", favoriteGame: "Game D" },
  { id: 21, name: "User 21", favoriteGame: "Game A" },
  { id: 22, name: "User 22", favoriteGame: "Game D" },
  { id: 23, name: "User 23", favoriteGame: "Game A" },
  { id: 24, name: "User 24", favoriteGame: "Game C" },
  { id: 25, name: "User 25", favoriteGame: "Game A" },
  { id: 26, name: "User 26", favoriteGame: "Game E" },
  { id: 27, name: "User 27", favoriteGame: "Game B" },
  { id: 28, name: "User 28", favoriteGame: "Game B" },
  { id: 29, name: "User 29", favoriteGame: "Game D" },
  { id: 30, name: "User 30", favoriteGame: "Game C" },
  { id: 31, name: "User 31", favoriteGame: "Game C" },
  { id: 32, name: "User 32", favoriteGame: "Game C" },
  { id: 33, name: "User 33", favoriteGame: "Game E" },
  { id: 34, name: "User 34", favoriteGame: "Game C" },
  { id: 35, name: "User 35", favoriteGame: "Game B" },
  { id: 36, name: "User 36", favoriteGame: "Game B" },
  { id: 37, name: "User 37", favoriteGame: "Game D" },
  { id: 38, name: "User 38", favoriteGame: "Game B" },
  { id: 39, name: "User 39", favoriteGame: "Game A" },
  { id: 40, name: "User 40", favoriteGame: "Game D" },
];

const Carsoul = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeitem = data[activeTabIndex];
  console.log(activeitem);

  // click to get the next slide
  const nextSlideHandler = () => {
    setActiveTabIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  //click to the back lside
  const prevSLideHandler = () => {
    setActiveTabIndex((prevIndex) =>
      prevIndex === 0 ? data.length-1: prevIndex - 1
    );
  };

  return (
    <div>
      <div key={activeitem.id}>
        <h1>PalyerName:-{activeitem.name}</h1>
        <p>faviortite game :-{activeitem.favoriteGame}</p>
      </div>
      <div>
       {activeTabIndex >0 &&  <button onClick={prevSLideHandler}>Prev</button>}
        {activeTabIndex<data.length-1 && <button onClick={nextSlideHandler}>next</button>}
      </div>
    </div>
  );
};

export default Carsoul;
