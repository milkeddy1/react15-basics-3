import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [person, setPerson] = useState(0)
  const { name, job, image, text, id } = people[person]

  const left = () => {
    if (person > 0) {
      setPerson(person - 1)
    } else if (person === 0) {
      setPerson(3)
    }
  }
  const right = () => {
    if (person < people.length - 1) {
      setPerson(person + 1)
    } else if (person === 3) {
      setPerson(0)
    }
  }

  const randomPerson = () => {
    let num = Math.floor(Math.random() * people.length)
    setPerson(num)
  }

  console.log(name);
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="qoute-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h1>{id}</h1>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={left} >
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={right}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={randomPerson}>
      Random
    </button>
  </article>;
};

export default Review;
