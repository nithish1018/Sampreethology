import React from 'react';
import img1 from "../assets/coverImages/img1.jpg";
import img2 from "../assets/coverImages/img2.jpg";
import img3 from "../assets/coverImages/img3.jpg";
import img4 from "../assets/coverImages/img4.jpg";
import img5 from "../assets/coverImages/img5.jpg";
import img6 from "../assets/coverImages/img6.jpg";
import img7 from "../assets/coverImages/img7.jpg";
import img8 from "../assets/coverImages/img8.jpg";
import img9 from "../assets/coverImages/img9.jpg";
import img10 from "../assets/coverImages/img10.jpg";
import { Link } from 'react-router-dom';



const BooksPage = () => {
  const imageStyle = {
    width: '600px',
    height: '400px',
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[
            { img: img1, title: 'Pichi Geethalu', price: 'https://amzn.eu/d/gfsRFZJ' },
            { img: img2, title: 'Samudhram Dachina Keratalu', price: 'https://amzn.eu/d/3tTcJUE' },
            { img: img3, title: 'Chandama Kathalu', price: 'https://store.pothi.com/book/sampreeth-shivaiah-neeli-%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B0%AE%E0%B0%BE%E0%B0%AE%E0%B0%B2-%E0%B0%95%E0%B0%A5%E0%B0%B2%E0%B1%81/' },
            { img: img4, title: 'Marani Manushula Kathalu', price: 'https://amzn.eu/d/1Gx3gtX' },
            { img: img5, title: 'Chinukulu', price: 'https://notionpress.com/read/chinukulu' },
            { img: img6, title: 'Upgrades Of Papaya', price: 'https://notionpress.com/read/upgrades-of-papaya-fruit-value-addition' },
            { img: img7, title: 'The Story Of Thirsty', price: 'https://notionpress.com/read/the-story-of-thirsty' },
            { img: img8, title: '22 Methods To Irrigate A Crop', price: 'https://amzn.eu/d/3aKWr3M' },
            { img: img9, title: 'Vedant Inevitable', price: 'https://amzn.eu/d/gRQcphf' },
            { img: img10, title: 'Vedanth Anitarasadhyam', price: 'https://amzn.eu/d/df6zTEc' },

          ].map((book, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-400  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block border border-blue-500"
                  style={imageStyle}
                  src={book.img}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BOOK</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{book.title}</h2>
                <Link to={book.price}>
                  <div className='flex flex-row items-center gap-2 w-full '>
                    <div className="bg-green-200 flex flex-row gap-2 rounded px-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      <p className="mt-1">Buy Now</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksPage;