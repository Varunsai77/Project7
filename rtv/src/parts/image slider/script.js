// // let next = document.querySelector('.next')
// // let prev = document.querySelector('.prev')

// // next.addEventListener('click', function(){
// //     let items = document.querySelectorAll('.item')
// //     document.querySelector('.slide').appendChild(items[0])
// // })

// // prev.addEventListener('click', function(){
// //     let items = document.querySelectorAll('.item')
// //     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// // })
// // import React, { useState } from 'react';
// // import './style.css'; // Ensure you have your styles in this file

// // export const Slider = () => {
// //     const items = [
// //         {
// //             name: 'Iceland',
// //             image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
// //             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
// //         },
// //         {
// //             name: 'Australia',
// //             image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
// //             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
// //         },
// //         {
// //             name: 'Netherlands',
// //             image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
// //             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
// //         },
// //         {
// //             name: 'Ireland',
// //             image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
// //             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
// //         },
// //     ];

// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     const nextSlide = () => {
// //         setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
// //     };

// //     const prevSlide = () => {
// //         setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
// //     };

// //     return (
// //         <div className="container">
// //             <div className="slide">
// //                 {items.map((item, index) => (
// //                     <div
// //                         key={index}
// //                         className="item"
// //                         style={{
// //                             backgroundImage: `url(${item.image})`,
// //                             opacity: index === currentIndex || index === (currentIndex + 1) % items.length ? 1 : 0,
// //                         }}
// //                     >
// //                         <div className="content">
// //                             <div className="name">{item.name}</div>
// //                             <div className="des">{item.description}</div>
// //                             <button>See More</button>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             <div className="button">
// //                 <button className="prev" onClick={prevSlide}>-
// //                     <i className="fa-solid fa-arrow-left"></i>
// //                 </button>
// //                 <button className="next" onClick={nextSlide}>+
// //                     <i className="fa-solid fa-arrow-right"></i>
// //                 </button>
// //             </div>
// //         </div>
// //     //     <div class="container">
// //     //     <div class="slide">
// //     //          <div class="item" style="background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);">
// //     //             <div class="content">
// //     //                 <div class="name">Switzerland</div>
// //     //                 <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
// //     //                 <button>See More</button>
// //     //             </div>
// //     //         </div>
// //     //         <div class="item" style="background-image: url(https://i.ibb.co/jrRb11q/img2.jpg);">
// //     //             <div class="content">
// //     //                 <div class="name">Finland</div>
// //     //                 <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
// //     //                 <button>See More</button>
// //     //             </div>
// //     //         </div> 
// //     //         <div class="item" style="background-image: url(https://i.ibb.co/NSwVv8D/img3.jpg);">
// //     //             <div class="content">
// //     //                 <div class="name">Iceland</div>
// //     //                 <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
// //     //                 <button>See More</button>
// //     //             </div>
// //     //         </div>
// //     //         <div class="item" style="background-image: url(https://i.ibb.co/Bq4Q0M8/img4.jpg);">
// //     //             <div class="content">
// //     //                 <div class="name">Australia</div>
// //     //                 <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
// //     //                 <button>See More</button>
// //     //             </div>
// //     //         </div>
// //     //         <div class="item" style="background-image: url(https://i.ibb.co/jTQfmTq/img5.jpg);">
// //     //             <div class="content">
// //     //                 <div class="name">Netherlands</div>
// //     //                 <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
// //     //                 <button>See More</button>
// //     //             </div>
// //     //         </div>
// //     //         <div class="item" style="background-image: url(https://i.ibb.co/RNkk6L0/img6.jpg);">
// //     //             <div class="content">
// //     //                 <div class="name">Ireland</div>
// //     //                 <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
// //     //                 <button>See More</button>
// //     //             </div>
// //     //         </div>
// //     //     </div>

// //     //     <div class="button">
// //     //         <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
// //     //         <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
// //     //     </div>
// //     // </div>
// //     );
// // };

// import React, { useState } from 'react';
// import './style.css'; // Make sure your styles are correctly imported

// export const Slider = () => {
//     const items = [
//         {
//             name: 'Iceland',
//             image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
//         },
//         {
//             name: 'Australia',
//             image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
//         },
//         {
//             name: 'Netherlands',
//             image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
//         },
//         {
//             name: 'Ireland',
//             image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
//             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//     };

//     return (
//         <div className="container">
//             <div className="slide">
//                 {items.map((item, index) => (
//                     <div
//                         key={index}
//                         className="item"
//                         style={{
//                             backgroundImage: `url(${item.image})`,
//                             opacity: index === currentIndex || index === (currentIndex + 1) % items.length ? 1: 2,
//                             transition: 'opacity 0.5s ease',
//                         }}
//                     >
//                         <div className="content">
//                             <div className="name">{item.name}</div>
//                             <div className="des">{item.description}</div>
//                             <button>See More</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="button">
//                 <button className="prev" onClick={prevSlide}>
//                     <i className="fa-solid fa-arrow-left"></i>
//                 </button>
//                 <button className="next" onClick={nextSlide}>
//                     <i className="fa-solid fa-arrow-right"></i>
//                 </button>
//             </div>
//         </div>
//     );
// };
import React, { useState } from 'react';
import './style.css'; // Ensure your styles are correctly imported

export const Slider = () => {
    const initialItems = [
        {
            name: 'Iceland',
            image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            name: 'Australia',
            image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            name: 'Netherlands',
            image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            name: 'Ireland',
            image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
    ];

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
                            <button>Book a slot</button>
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


