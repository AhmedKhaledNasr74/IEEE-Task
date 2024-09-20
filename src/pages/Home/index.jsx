import React from "react";
import "./styles.css";
import data from "../../details.json";
import PizzaCard from "../../components/PizzaCard";
const Home = () => {
    return (
        <>
            <h1 className="pageTitle">FAST REACT PIZZA</h1>

            <h4 className="fitContent mx-auto border border-black border-start-0 border-end-0 py-2 mb-4">
                OUR MENU
            </h4>

            <p className="fitContent mx-auto text-center">
                best pizza restaurant ever !! <br /> Cairo ,Egypt
            </p>

            <div className="container w-50">
                <div className="row">
                    {data.map((pizza, i) => (
                        <PizzaCard pizza={pizza} key={i} index={i} />
                    ))}
                </div>
            </div>
            <h6 className="text-center pt-2">We're Open until 22.00</h6>

            <div className="order text-center mt-4">
                <button className="btn btn-warning rounded-0 px-4 py-1">
                    Order
                </button>
            </div>
        </>
    );
};

export default Home;
