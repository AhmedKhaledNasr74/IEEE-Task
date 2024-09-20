import React from "react";

const PizzaCard = ({ pizza, index }) => {
    return (
        <div
            className={`col-lg-6 col-sm-12${
                pizza.price === "Sold Out" && " gray-overlay"
            }`}
        >
            <div className=" d-flex p-2">
                <div className="leftSide">
                    <div className="pizzaPoster">
                        <img
                            src={`${process.env.PUBLIC_URL + pizza.poster}`}
                            alt={"pizza" + (index + 1)}
                        />
                    </div>
                </div>

                <div className="pizzaDetails ps-4">
                    <h5 className="text-body-secondary">{pizza.name}</h5>
                    <p className="text-muted fst-italic">{pizza.details}</p>
                    <h6>{pizza.price}</h6>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
