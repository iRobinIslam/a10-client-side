import React,{ useState, useEffect } from "react";
import Bannerr from '../Bannerr'
import { NavLink, useLoaderData } from "react-router-dom";
import Productcard from '../productcard/Productcard';
import Category from "../Categorysection/Category";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
    const products = useLoaderData();

    // Dark mode state
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

    // Position state for the draggable toggle
    const [position, setPosition] = useState(() => {
        const savedPosition = JSON.parse(localStorage.getItem("togglePosition"));
        return savedPosition || { x: 20, y: window.innerHeight / 2 };
    });

    const [dragging, setDragging] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    };

    // Apply dark mode to body
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // Handle dragging
    const handleMouseDown = () => {
        setDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        const newX = e.clientX;
        const newY = e.clientY;
        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setDragging(false);
        localStorage.setItem("togglePosition", JSON.stringify(position)); // Save position
    };

    return (
        <div className={`min-h-screen p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-500`} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>

            {/* 🌙 Draggable Dark Mode Toggle */}
            <div 
                className="fixed w-14 h-14 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg"
                style={{ left: `${position.x}px`, top: `${position.y}px`, position: "absolute", zIndex: 9999 }} // Ensures the toggle is above other content
                onMouseDown={handleMouseDown}
            >
                <div 
                    onClick={toggleDarkMode} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-yellow-500 shadow-md transition-all duration-500"
                >
                    {darkMode ? <FaSun className="text-yellow-500 text-xl" /> : <FaMoon className="text-gray-700 text-xl" />}
                </div>
            </div>

            <Bannerr />

            <h1 className="font-bold text-3xl text-center">Our Current Product's</h1>

            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 mt-4">
                {products.slice(0,6).map(product => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>

            <NavLink to='/allcurrentproduct'>
                <button className="btn btn-primary w-full mt-6">Show-More</button>
            </NavLink>

            <Category />
          
        </div>
    );
};

export default Home;
