import React from 'react';
import reviewsData from './Data';
import './testimonialReviews.css';

function TestimonialReviews() {
  const [idx, setIdx] = React.useState(0);
  const { name, job, image, text } = reviewsData[idx];

  const rev = (num) => {
    if (num > reviewsData.length - 1) {
      return 0;
    }
    if (num < 0) {
      return reviewsData.length - 1;
    }
    return num;
  };

  function next() {
    setIdx((nextIdx) => {
      const nextReview = nextIdx + 1;
      return rev(nextReview);
    });
  }

  function previous() {
    setIdx((previousIdx) => {
      const previousReview = previousIdx - 1;
      return rev(previousReview);
    });
  }

  function randomReview() {
    var randomRev = Math.floor(Math.random() * reviewsData.length);
    if (randomRev === idx) {
      randomRev = idx + 1;
    }
    return setIdx(rev(randomRev));
  }

  return (
    <div className="container">
      <div className="containerr">
        <div className="containerrr">
          <img className="imgg" src={image} alt={name} />
          <h5>{name}</h5>
          <p className="pp">{job}</p>
        </div>
        <p>{text}</p>
      </div>
      <div className="leftright">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
          className="left"
          onClick={next}
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
          className="right"
          onClick={previous}
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </div>
      <div className="btnn">
        <button
          className="btn btn-outline-info text-dark"
          onClick={randomReview}
        >
          Random reviews
        </button>
      </div>
    </div>
  );
}

export default React.memo(TestimonialReviews);
