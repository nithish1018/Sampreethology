import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsDownload } from 'react-icons/bs'; // Importing download icon from react-icons library

const QuotesPage = () => {
    const [lifeImageList, setLifeImageList] = useState([]);
    const [loveImageList, setLoveImageList] = useState([]);
    const [tenglishImageList, setTenglishImageList] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const imageImports = import.meta.glob('../assets/Quotes/Life/*.{png,jpg,jpeg,svg}');
            const images = await Promise.all(Object.values(imageImports).map(importFunc => importFunc()));
            setLifeImageList(images);
        };
        importImages();
    }, []);
    useEffect(() => {
        const importImages = async () => {
            const imageImports = import.meta.glob('../assets/Quotes/Love/*.{png,jpg,jpeg,svg}');
            const images = await Promise.all(Object.values(imageImports).map(importFunc => importFunc()));
            setLoveImageList(images);
        };
        importImages();
    }, []);
    useEffect(() => {
        const importImages = async () => {
            const imageImports = import.meta.glob('../assets/Quotes/Tenglish/*.{png,jpg,jpeg,svg}');
            const images = await Promise.all(Object.values(imageImports).map(importFunc => importFunc()));
            setTenglishImageList(images);
        };
        importImages();
    }, []);

    return (
        <>
            <section className="px-4 md:px-8 lg:px-16 xl:px-20">
                <div className="text-xl font-bold mb-3"> Life Quotes</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {lifeImageList.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image.default} className="w-full h-auto" alt={`image-${index}`} />
                            <a href={image.default} download={`image-${index}`} className="absolute bottom-2 right-2 text-gray-500 text-2xl hover:text-gray-800">
                                <BsDownload />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-xl font-semibold pt-3 mt-3 mb-3">Love Quotes</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {loveImageList.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image.default} className="w-full h-auto" alt={`image-${index}`} />
                            <a href={image.default} download={`image-${index}`} className="absolute bottom-2 right-2 text-gray-500 text-2xl hover:text-gray-800">
                                <BsDownload />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-xl font-semibold pt-3 mt-3 mb-3">Tenglish Quotes</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tenglishImageList.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image.default} className="w-full h-auto" alt={`image-${index}`} />
                            <a href={image.default} download={`image-${index}`} className="absolute bottom-2 right-2 text-gray-500 text-2xl hover:text-gray-800">
                                <BsDownload />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default QuotesPage;
