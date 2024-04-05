import React from 'react';
import author from "../assets/AuthorImage/author_new.jpg"
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded w-full h-[500px]"
                        alt="hero"
                        src={author}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Sampreeth Shivaiah Neeli
                    </h1>
                    <span className='text-xl font-semibold'> Indian author hailing from Mahabubnagar, Telangana</span>
                    <p className="mb-8 leading-relaxed pt-2 mt-2">
                        Transitioning from a teaching role to a prolific writer, Sampreeth has captivated readers with his heartfelt Telugu poetry, compelling short stories, and diverse literary works. With a portfolio spanning over 10 books, encompassing genres from poetry to historical fiction, Sampreeth’s dedication to storytelling reflects his profound connection to his cultural roots and his unwavering commitment to sharing narratives that resonate with readers worldwide.
                        <a target='_blank' href="https://medium.com/@shegoinfohub/who-is-sampreeth-shivaiah-neeli-an-inspiring-indian-author-a786d38fa8a0"><span className='text-blue-500 cursor-pointer'>...Read more</span> </a>
                    </p>
                    <div className="flex justify-center">
                        <Link to={"books"}>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Explore Books
                            </button>
                        </Link>
                        <Link to={'quotes'}>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Explore Quotes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
