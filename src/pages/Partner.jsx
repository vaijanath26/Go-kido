import React, { useState } from "react";
import  "./Partner.css";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.jpeg";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import p10 from "../assets/images/p10.png";
import p11 from "../assets/images/p11.jpeg";
import p12 from "../assets/images/p12.png";
import p13 from "../assets/images/p13.png";
import p14 from "../assets/images/p14.png";
import p15 from "../assets/images/p15.png";
import p16 from "../assets/images/p16.png";
import p17 from "../assets/images/p17.png";
import p18 from "../assets/images/p18.png";
import p19 from "../assets/images/p19.png";
import p20 from "../assets/images/p20.png";
import p21 from "../assets/images/p21.png";
import p22 from "../assets/images/p22.png";
import p23 from "../assets/images/p23.png";
import p24 from "../assets/images/p24.png";
import p25 from "../assets/images/p25.png";
import p26 from "../assets/images/p26.png";
import p27 from "../assets/images/p27.png";
import p28 from "../assets/images/p28.png";
import p29 from "../assets/images/p29.png";
import p30 from "../assets/images/p30.png";
import p31 from "../assets/images/p31.png";
import p32 from "../assets/images/p32.png";
import p33 from "../assets/images/p33.png";
import p34 from "../assets/images/p34.png";
import p35 from "../assets/images/p35.jpg";
import p36 from "../assets/images/p36.png";
import p37 from "../assets/images/p37.jpg";
import p38 from "../assets/images/p38.png";
import p39 from "../assets/images/p39.jpg";
import p40 from "../assets/images/p40.png";
import p41 from "../assets/images/p41.jpg";
import p42 from "../assets/images/p42.png";
import p43 from "../assets/images/p43.png";
import p44 from "../assets/images/p44.png";
import p45 from "../assets/images/p45.png";
import p46 from "../assets/images/p46.jpg";
import p47 from "../assets/images/p47.jpg";
import p48 from "../assets/images/p48.jpg";
import p49 from "../assets/images/p49.png";
import p50 from "../assets/images/p50.png";
import p51 from "../assets/images/p51.png";
import p52 from "../assets/images/p52.png";
import p53 from "../assets/images/p53.png";


const partners = [
  {
    name: "Lindbergh’s Cafe",
    address: "Amelia-Mary-Earhart-Straße 8",
    status: "open",
    cuisine: ["German", "Italian", "French", "Continental"],
    services: ["Takeaway", "Delivery"],
    image: p1,
  },
  {
    name: "The Loft Fitness & Health Club",
    address: "Homburger Straße 76-78, 61118 Bad Vilbel",
    status: "open",
    cuisine: ["Continental"],
    services: ["Delivery"],
    image: p2,
  },
  {
    name: "Sushiko",
    address: "Schweizer Str. 61",
    status: "closed",
    cuisine: ["Japanese"],
    services: ["Takeaway", "Delivery"],
    image: p3,
  },
  {
    name: "Takahumi Sushi",
    address: "An der Hauptwache 7",
    status: "closed",
    cuisine: ["Japanese"],
    services: ["Takeaway", "Delivery"],
    image: p4,
  },
  {
    name: "Sushi & Thai Royal",
    address: "Stresemannallee 8 60596 Frankfurt am Main",
    status: "closed",
    cuisine: ["Japanese"],
    services: ["Takeaway", "Delivery"],
    image: p5,
  },
  {
    name: "Singhs Indisches Restaurant",
    address: "Albrechtstraße 21 65185 Wiesbaden",
    status: "closed",
    cuisine: ["Indian"],
    services: ["Takeaway", "Delivery"],
    image: p6,
  },
  {
    name: "Chopt Greens Wiesbaden",
    address: "Langgasse 42, 65183 Wiesbaden",
    status: "closed",
    cuisine: ["Continental"],
    services: ["Takeaway", "Delivery"],
    image: p7,
  },
  {
    name: "Pizza22",
    address: "Viktoriastraße 22, 65189 Wiesbaden",
    status: "closed",
    cuisine: ["Continental"],
    services: ["Takeaway", "Delivery"],
    image: p8,
  },
  {
    name: "Maryam Grill",
    address: "Dotzheimer Str. 118, 65197 Wiesbaden",
    status: "closed",
    cuisine: ["Continental"],
    services: ["Takeaway", "Delivery"],
    image: p9,
  },
  {
    name: "MoschMosch",
    address: "Wilhelmstraße 52D, 65183 Wiesbaden",
    status: "closed",
    cuisine: ["Japanese"],
    services: ["Takeaway", "Delivery"],
    image: p10,
  },
  {
    name: "By Christianos",
    address: "Walter-Hallstein-Straße 5-7, 65197 Wiesbaden",
    status: "closed",
    cuisine: ["Continental"],
    services: ["Takeaway", "Delivery"],
    image: p11,
  },
  {
    name: "Bella Italia",
    address: "Stiftstraße 14, 65183 Wiesbaden",
    status: "closed",
    cuisine: ["Italian"],
    services: ["Takeaway", "Delivery"],
    image: p12,
  },
  {
    name: "Mr. Pizza",
    address: "Schiersteiner Str. 88, 65187 Wiesbaden",
    status: "closed",
    cuisine: ["Italian", "Continental"],
    services: ["Takeaway", "Delivery"],
    image: p13,
  },
  {
    name: "Oppenheimer Sushi Mainz",
    address: "Carl-Zeiss-Straße 44a, 55129 Mainz",
    status: "closed",
    cuisine: ["Japanese"],
    services: ["Takeaway", "Delivery"],
    image: p14,
  },
  {
    name: "Baba Burger",
    address: "Paradiesgasse 38, 60594 Frankfurt am Main",
    status: "closed",
    cuisine: ["Continental"],
    services: ["Takeaway", "Delivery"],
    image: p15,
  },
  {
    name: "Darmstädter Schnitzelhaus",
    address: "Roßdörfer Str. 23, 64287 Darmstadt",
    status: "coming_soon",
    cuisine: ["German", "Continental"],
    services: ["Takeaway", "Delivery"],
    image: p16,
  },
  {
    name: "Babo Döner",
    address: "Heimstättensiedlung 83, 64295 Darmstadt",
    status: "closed",
    cuisine: ["Continental"],
    services: ["Takeaway", "Delivery"],
    image: p17,
  },
  {
    name: "Kneipe 41",
    address: "Kahlertstraße 41, 64293 Darmstadt",
    status: "coming_soon",
    cuisine: ["Italian", "Continental"],
    services: ["Takeaway", "Delivery"],
    image: p18,
  },
  {
    name: "Shiraz",
    address: "Dieburger Str. 73, 64287 Darmstadt",
    status: "closed",
    cuisine: ["Indian"],
    services: ["Takeaway", "Delivery"],
    image: p19,
  },
  {
    name: "My Pizza Darmstadt",
    address: "Kahlertstraße 49, 64293 Darmstadt",
    status: "closed",
    cuisine: ["Italian"],
    services: ["Takeaway", "Delivery"],
    image: p20,
  },
  {
    name: "Fresh Thai Kitchen",
    address: "Otto-Röhm-Straße 82, 64293 Darmstadt",
    status: "closed",
    cuisine: ["Thai"],
    services: ["Takeaway", "Delivery"],
    image: p21,
  },
  {
    name: "China Taxi Darmstadt",
    address: "Pallaswiesenstraße 150 A, 64293 Darmstadt",
    cuisine: ["Chinese"],
    status: null,
    services: ["Takeaway", "Delivery"],
    image: p22, 
  },
  {
    name: "pizzaboy",
    address: "Im Tiefen See 1, 64293 Darmstadt",
    cuisine: ["Italian"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p23, 
  },
  {
    name: "Freddy Fresh Pizza Darmstadt",
    address: "Dieburger Str. 18, 64287 Darmstadt",
    cuisine: ["Italian"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p24, 
  },
  {
    name: "Santino's - Salat und mehr",
    address: "Schiffenberger Weg 12, 35394 Gießen",
    cuisine: ["Italian", "Continental"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p25, 
  },
  {
    name: "Burgerholic Best Burger In Town",
    address: "Hermannstraße 59, 64331 Weiterstadt",
    cuisine: ["Italian", "Mexican", "Continental"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p26, 
  },
  {
    name: "Burgerday",
    address: "Herborner Str. 2A, 35614 Aßlar",
    cuisine: ["Italian", "Mexican", "Continental"],
    status: null,
    services: ["Takeaway", "Delivery"],
    image: p27, 
  },
  {
    name: "Indian Tandoori Restaurant",
    address: "Grieseler Str. 9, 35510 Butzbach",
    cuisine: ["Indian"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p28,
  },
  {
    name: "Toros Dönerhaus",
    address: "Hermannsteiner Str. 88, 35614 Aßlar",
    cuisine: [],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p29,
  },
  {
    name: "Kiyan Kebaphaus",
    address: "Hermannsteiner Str. 8, 35614 Aßlar",
    cuisine: ["Continental"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p30,
  },
  {
    name: "Best Pizza Restaurant",
    address: "Nauborner Str. 142, 35578 Wetzlar",
    cuisine: ["Italian", "Continental"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p31,
  },
  {
    name: "And & Vin",
    address: "In den Kolonaden 21, 61169 Friedberg (Hessen)",
    cuisine: ["Italian"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p32,
  },
  {
    name: "Forno D'Oro I",
    address: "Homburger Landstraße 6660435 Frankfurt am Main",
    cuisine: [],
    status: null,
    services: ["Takeaway", "Delivery"],
    image: p33,
  },
  {
    name: "Ganesha Tandoori Restaurant",
    address: "Im Prüfling 42, 60389 Frankfurt am Main",
    cuisine: ["Indisch", "Vegetarisch", "Fleisch"],
    status: null,
    services: ["Takeaway", "Delivery"],
    image: p34,
  },
  {
    name: "Mini Asia",
    address: "Hauptstraße 31, 61231 Bad Nauheim",
    cuisine: ["Indisch", "Vegan", "Vegetarisch", "Fitness"],
    status: "Geschlossen",
    services: ["Takeaway"],
    image: p35,
  },
  {
    name: "Al Rafa - Il Buon Palato",
    address: "Frankfurter Str. 47, 61169 Friedberg (Hessen)",
    cuisine: [],
    status: "Geschlossen",
    services: ["Takeaway"],
    image: p36,
  },
  {
    name: "Eiscafé Venezia Bad Vilbel",
    address: "Frankfurter Str. 36, 61118 Bad Vilbel, Germany",
    cuisine: [],
    status: "Geschlossen",
    services: ["Takeaway"],
    image: p37,
  },
  {
    name: "Nidda Sushi Bar",
    address: "Markt 26, 63667 Nidda",
    cuisine: ["Japanisch"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"],
    image: p38,
  },
  {
    name: "Restaurant Carls",
    address: "Hille Gastro Consulting GmbH Carl-Schurz-Straße 33",
    cuisine: [],
    status: "Geschlossen",
    services: ["Takeaway"],
    image: p39,
  },
  {
    name: "Grüneburger Döner",
    address: "Grüneburgweg 21, 60322 Frankfurt am Main",
    image: p40,
    cuisine: ["Continental"],
    status: "Geschlossen",
    services: ["Delivery"]
  },
  {
    name: "Die Waffel",
    address: "Lotharstraße 24, 55116 Mainz",
    image: p41,
    cuisine: [
      "Asiatisch",
      "Indisch",
      "Afghanisch",
      "Orientalisch",
      "Arabisch",
      "Vegan",
      "Fitness"
    ],
    status: "Geschlossen",
    services: ["Takeaway"]
  },
  {
    name: "TWOBROS",
    address: "Grüneburgweg 25, 60322 Frankfurt",
    image: p42,
    cuisine: ["Mexican", "Continental"],
    status: "coming soon",
    services: ["Takeaway", "Delivery"]
  },
  {
    name: "Altstadt-Ofen Bad Vilbel",
    address: "Frankfurter Straße 5, 61118 Bad Vilbel",
    image: p43,
    cuisine: ["Italian"],
    status: "Geschlossen",
    services: ["Takeaway"]
  },
  {
    name: "Konichi",
    address: "Konichi H&D Joint Venture GmbH, Bahnhofsplatz 7, 61118 Bad Vilbel",
    image: p44,
    cuisine: ["German"],
    status: "Geschlossen",
    services: ["Delivery"]
  },
  {
    name: "Metzgerei Lukarsch",
    address: "Marktplatz 4, 61118 Bad Vilbel",
    image: p45,
    cuisine: ["German", "Continental"],
    status: "Geschlossen",
    services: ["Takeaway"]
  },
  {
    name: "Aki Gesa",
    address: "Homburger Straße 180, 61118 Bad Vilbel",
    image: p46,
    cuisine: [],
    status: "Geschlossen",
    services: ["Takeaway"]
  },
  {
    name: "Pearl of India",
    address: "Frankfurter Str. 171, 61118 Bad Vilbel",
    image: p47,
    cuisine: [],
    status: "Geschlossen",
    services: ["Takeaway"]
  },
  {
    name: "Bel Forno Pizza & Pasta",
    address: "Lautenschlägerstraße 23, 63450 Hanau",
    image: p48,
    cuisine: [
      "Italienisch",
      "Mediterran",
      "Pizza",
      "Pasta",
      "Nudeln",
      "Vegetarisch",
      "Vegan",
      "Deutsche Küche",
      "Burger"
    ],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"]
  },
  {
    name: "Sushi Eschborn",
    address: "Rödelheimer Straße 59–61",
    image: p49,
    cuisine: ["Japanese"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"]
  },
  {
    name: "Sushi Ichi",
    address: "Saalburgstr. 16",
    image: p50,
    cuisine: ["Japanese"],
    status: "Geschlossen",
    services: ["Takeaway"]
  },
  {
    name: "Sushi Love",
    address: "Mainzer Landstr. 73",
    image: p51,
    cuisine: ["Japanese"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"]
  },
  {
    name: "Sushi Palace",
    address: "Grempstr. 11",
    image: p52,
    cuisine: ["Japanese"],
    status: "Geschlossen",
    services: ["Takeaway", "Delivery"]
  },
  {
    name: "Sushi Queen",
    address: "Bahnhofsplatz 1",
    image: p53,
    cuisine: ["Japanese"],
    status: "Geschlossen",
    services: ["Takeaway"]
  }
];

export default function PartnerPage() {
  const [activeService, setActiveService] = useState("All");

  const filteredPartners =
    activeService === "All"
      ? partners
      : partners.filter((p) => p.services.includes(activeService));
      

  return (
    <>
    <div className="abc">
    <h1>53 Partner</h1>
    </div>
    
    <div className="partner-wrapper">
      <div className="partner-filters">
    
{["All", "Delivery", "Takeaway"].map((opt) => (
          <label
            key={opt}
            className={`radio-btn ${activeService === opt ? "active" : ""}`}
          >
            <input
              type="radio"
              name="service"
              value={opt}
              checked={activeService === opt}
              onChange={() => setActiveService(opt)}
            />
            {opt}
          </label>
        ))}
      </div>

      <div className="partner-banner">
        <span>
          Select from 1000+ healthy menu items and have it ordered in our
          zero-waste boxes.
        </span>
        <span className="partner-icon">🚴‍♂️</span>
      </div>

      <div className="partner-cards">
        {filteredPartners.map((p, idx) => (
          <div className="partner-card" key={idx}>
            <img src={p.image} alt={p.name} className="partner-img" />
            <div className="partner-tag">{p.cuisine.join(",")}</div>
            <div
              className={`partner-status ${
                p.status === "open" ? "open" : "closed"
              }`}
            >
              {p.status === "open" ? "open" : "Geschlossen"}
            </div>
            <div className="partner-info">
              <h3>{p.name}</h3>
              <p>{p.address}</p>
            </div>
            <div className="partner-options">
              {p.services.map((s, i) => (
                <span key={i}>
                  {s === "Delivery" ? "🚴‍♂️" : "🛍️"} {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
