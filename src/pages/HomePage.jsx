import React from 'react';
import author from "../assets/AuthorImage/author_new.jpg";
import "../index.css"; // Import your CSS file where body styles are defined

const HomePage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded w-full h-[500px] shadow-2xl"
                        alt="hero"
                        src={author}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black roboto-slab-home">
                        Sampreeth Shivaiah Neeli
                    </h1>
                    <span className='text-xl font-semibold text-black'> Indian author hailing from Mahabubnagar, Telangana</span>
                    <p className="mb-8 leading-relaxed pt-2 mt-2 text-black font-semibold">
                        Transitioning from a teaching role to a prolific writer, Sampreeth has captivated readers with his heartfelt Telugu poetry, compelling short stories, and diverse literary works. With a portfolio spanning over 10 books, encompassing genres from poetry to historical fiction, Sampreeth’s dedication to storytelling reflects his profound connection to his cultural roots and his unwavering commitment to sharing narratives that resonate with readers worldwide.
                        <a target='_blank' href="https://medium.com/@shegoinfohub/who-is-sampreeth-shivaiah-neeli-an-inspiring-indian-author-a786d38fa8a0"><span className='text-gray-100 font-semibold cursor-pointer'>...Read more</span> </a>
                    </p>
                    <div className="flex justify-center">
                        <a href='/books'>
                            <button className="inline-flex text-white gap-2 pt-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg animate-pulse">
                                Explore Books
                                <i className="pi  pi-book mt-2 " style={{ fontSize: '1rem' }} ></i>
                            </button>
                        </a>
                        <a href='/quotes'>
                            <button className="ml-4 inline-flex text-gray-700 gap-2 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg animate-pulse">
                                Explore Quotes
                                <i className="pi  pi-sparkles pt-1 mt-1 pi-spin " style={{ fontSize: '1rem' }} ></i>

                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
