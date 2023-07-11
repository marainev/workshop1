import React, { useState } from "react";
import "../content.css";

// Import the Font Awesome icon library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const BusinessCard = ({ name, email, tel, photo, onRemove }) => {
    return (
      <div className="business-card">
        <img src={photo} alt="Profile" className="photo" />
        <h2 className="name">{name}</h2>
        <p className="email">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          {email}
        </p>
        <p className="tel">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          {tel}
        </p>
        <button className="remove-button" onClick={onRemove}>
          Remove
        </button>
      </div>
    );
  };

BusinessCard.defaultProps = {
  name: "Not specified",
  email: "Not specified",
  tel: "Not specified",
  photo:
    "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
};

const BusinessCardContent = () => {
  const [businessCards, setBusinessCards] = useState([
    {
      id: 1,
      name: "Mikhail Tal",
      email: "mikhailnekhemtal@example.com",
      tel: "000-000-0000",
      photo: "https://app.fide.com/upload/7739/db507d38a526cff768de667c7ca1cbfd.jpg",
    },
    {
      id: 2,
      name: "Bobby Fischer",
      email: "bobbyfischer@example.com",
      tel: "111-111-1111",
      photo: "https://static.life.com/wp-content/uploads/migrated/2012/08/150305-bobby-fischer-01.jpg",
    },
    {
      id: 3,
      name: "Anatoly Karpov",
      email: "anatolyyevgenkarpov@example.com",
      tel: "222-222-2222",
      photo:"https://app.fide.com/upload/10071/4efdd2f969559e8b1c92e99f32ded48e.jpg",
    },
    {
      id: 4,
      name: "Garry Kasparov",
      email: "garrykasparov@example.com",
      tel: "333-333-3333",
      photo: "https://static01.nyt.com/images/2020/12/19/arts/18kasparov-music-1/18kasparov-music-1-mediumSquareAt3X.jpg",
    },
    {
      id: 5,
      name: "Magnus Carlsen",
      email: "magnuscarlsen@example.com",
      tel: "444-444-4444",
      photo:"https://media.npr.org/assets/img/2022/07/20/ap21344477319182_custom-32c06406f279c69d5e853bc30649315b43e5cc19-s1100-c50.jpg",
    },
    {
      id: 6,
      name: "Wesley So",
      email: "wesleybarbossaso@example.com",
      tel: "555-555-5555",
      photo: "https://www.rappler.com/tachyon/r3-assets/612F469A6EA84F6BAE882D2B94A4B421/img/C262D008A3E74261B9ABB0A5F332169A/wesley-so.jpg",
    },
  ]);

  const removeCard = (id) => {
    setBusinessCards((prevCards) =>
      prevCards.filter((card) => card.id !== id)
    );
  };

  return (
    <div className="main-content">
      <div className="business-card-grid">
        {businessCards.map((card) => (
          <BusinessCard
            key={card.id}
            name={card.name}
            email={card.email}
            tel={card.tel}
            photo={card.photo}
            onRemove={() => removeCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessCardContent;