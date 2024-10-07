
import React, { useState } from 'react';
import './style.css'; // Ensure your styles are correctly imported
import { useNavigate } from 'react-router-dom';
export const initialItems = [
    {
        name: 'SwimmingPool',
        image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
        description: 'Water will be cleaned often and something like swimming head caps will be arranged soon',
    },
    {
        name: 'CricketNets',
        image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
        description: 'The equipment will be provided here and also snack items at normal price are available',
    },
    {
        name: 'Hotel',
        image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
        description: 'kjadh',
    },
    {
        name: 'Ireland',
        image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
];

export const Main = () => {
    const navigate = useNavigate(); // Get the navigate function

    const [currentItems, setCurrentItems] = useState(initialItems);

    const nextSlide = () => {
        setCurrentItems((prevItems) => {
            const newItems = [...prevItems];
            newItems.push(newItems.shift()); // Move the first item to the end
            return newItems;
        });
    };

    const prevSlide = () => {
        setCurrentItems((prevItems) => {
            const newItems = [...prevItems];
            newItems.unshift(newItems.pop()); // Move the last item to the front
            return newItems;
        });
    };

    // Pass the name of the current item to the GoPag component
    const Go = (name) => {
        navigate('/go', { state: { itemName: name } }); // Pass name as state
    };

    return (
        <div className="container">
            <div className="slide">
                {currentItems.map((item, index) => (
                    <div
                        key={index}
                        className="item"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            opacity: index === 0 || index === 1 ? 1 : 0,
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        <div className="content">
                            <div className="name">{item.name}</div>
                            <div className="des">{item.description}</div>
                            {/* Pass the current item name to the GoPag page */}
                            <button onClick={() => Go(item.name)}>Book a slot</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button">
                <button className="prev" onClick={prevSlide}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="next" onClick={nextSlide}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};
