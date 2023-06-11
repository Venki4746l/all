import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const data = [
  { id: 1, name: "product19", price: 356, rating: 4 },
  { id: 2, name: "product15", price: 62, rating: 4 },
  { id: 3, name: "product3", price: 801, rating: 2 },
  { id: 4, name: "product7", price: 517, rating: 4 },
  { id: 5, name: "product17", price: 886, rating: 3 },
  { id: 6, name: "product14", price: 312, rating: 2 },
  { id: 7, name: "product3", price: 838, rating: 4 },
  { id: 8, name: "product1", price: 564, rating: 4 },
  { id: 9, name: "product19", price: 85, rating: 3 },
  { id: 10, name: "product9", price: 470, rating: 5 },
  { id: 11, name: "product5", price: 522, rating: 4 },
  { id: 12, name: "product19", price: 867, rating: 5 },
  { id: 13, name: "product2", price: 200, rating: 1 },
  { id: 14, name: "product12", price: 52, rating: 3 },
  { id: 15, name: "product9", price: 687, rating: 4 },
  { id: 16, name: "product10", price: 219, rating: 1 },
  { id: 17, name: "product8", price: 574, rating: 5 },
  { id: 18, name: "product9", price: 960, rating: 4 },
  { id: 19, name: "product6", price: 257, rating: 4 },
  { id: 20, name: "product16", price: 2, rating: 3 },
];

const sortingOptions = [
  { id: "A-Z", text: "A-Z" },
  { id: "Z-A", text: "Z-A" },
  { id: "Low-High", text: "Low-High" },
  { id: "High-Low", text: "High-Low" },
];

const Sorting = () => {
    const [activeOption,setActiveOption]=useState(null)
    if(activeOption==="A-Z"){
        data.sort((a, b) => a.name.localeCompare(b.name));
    }
    if(activeOption==="Z-A"){
        data.sort((a, b) => b.name.localeCompare(a.name));
    }
    if(activeOption==="Low-High"){
        data.sort((a, b) => a.price-b.price);
    }
    if(activeOption==="High-Low"){
        data.sort((a, b) => b.price-a.price);
    }


    
  return (
    <div>
        <h1>Sort the items</h1>
      <select className="m-3" onChange={(e)=>setActiveOption(e.target.value)}>
        <option hidden>Slect method</option>
        {sortingOptions.map((each) => (
          <option value={each.id} key={each.id}>{each.text}</option>
        ))}
      </select>
      {data.map((each) => (
        <Card className="m-3 bg-info" key={each.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="tex-dark fs-1"> {each.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {each.price}
            </Card.Subtitle>
            <Card.Text className="text-danger fs-2">rating is: {each.rating}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Sorting;
