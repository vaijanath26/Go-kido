import React, { useState } from "react";
import { useParams } from "react-router-dom";
import partners from "../pages/Partner.jsx";
import p1 from "../assets/images/p1.png";

export default function PartnerDetailPage() {
  const [selectedCategory, setSelectedCategory] = useState("Cafe");
  const [selectedOption, setSelectedOption] = useState("");
  const [total, setTotal] = useState(0);

  const cafeItems = [
    { name: "Espresso", price: 2.5 },
    { name: "Hot Chocolate", price: 3.9 },
  ];

  const burgerItems = [
    { name: "Classic Burger", price: 5.5 },
    { name: "Cheese Burger", price: 6.2 },
  ];

  const handleAdd = (price) => {
    setTotal((prev) => prev + price);
  };

  // Debugging step: check if partners is an array
  console.log(partners);

  if (!Array.isArray(partners)) {
    return <div>Error: partners data is not an array</div>;
  }

  const { partnerId } = useParams();
  const partner = partners.find((p) => p.id === partnerId);

  if (!partner) {
    return <div>Partner not found</div>;
  }

  return (
    <div className="container">
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`button ${selectedCategory === "Cafe" ? "button-selected" : "button-default"}`}
          onClick={() => setSelectedCategory("Cafe")}
        >
          Cafe
        </button>
        <button
          className={`button ${selectedCategory === "Burger" ? "button-selected" : "button-default"}`}
          onClick={() => setSelectedCategory("Burger")}
        >
          Burger
        </button>
      </div>

      <div className="flex gap-6">
        <div className="w-2/3">
          <h2 className="text-xl font-semibold text-green-900 mb-4">
            {selectedCategory}
          </h2>
          <div className="flex gap-4 flex-wrap">
            {(selectedCategory === "Cafe" ? cafeItems : burgerItems).map((item, index) => (
              <div key={index} className="card">
                <h3 className="card-title">{item.name}</h3>
                <div className="card-price">{item.price.toFixed(2)} €</div>
                <div className="card-button">
                  <button className="info-btn">i</button>
                  <button
                    className="add-btn"
                    onClick={() => handleAdd(item.price)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar-header">Bestellübersicht</div>
          <div className="sidebar-body">
            <div className="flex justify-between total">
              <span>TOTAL</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="deliveryOption"
                  value="Lieferung"
                  checked={selectedOption === "Lieferung"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="radio-input"
                />
                Lieferung
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryOption"
                  value="Selbstabholung"
                  checked={selectedOption === "Selbstabholung"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="radio-input"
                />
                Selbstabholung
              </label>
            </div>
            <button className="order-btn">Vorbestellung</button>
          </div>
        </div>
      </div>

      <div className="partner-detail-page">
        <div className="partner-detail-header">
          <img
            src={p1}
            alt="Partner"
            className="partner-detail-image"
          />
          <h2 className="partner-detail-name">{partner.name}</h2>
          <p className="partner-detail-address">{partner.address}</p>
          <p className="partner-status">
            {partner.status === "open" ? "Open" : "Closed"}
          </p>
        </div>
        <div className="partner-detail-info">
          <h3 className="text-xl font-semibold mb-2">
            Cuisine: {partner.cuisine.join(", ")}
          </h3>
          <p className="text-gray-700 mb-4">{partner.description}</p>
          <div className="partner-services">
            {partner.services.map((service, index) => (
              <span key={index} className={`partner-services ${service.toLowerCase()}`}>
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
