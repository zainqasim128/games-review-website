import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for routing
import "../Main.css";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);  // Keep track of reviews locally in state (not necessary for review submission)
  const navigate = useNavigate();

  const cardData = [
    { id: 1, title: "Halo Infinite", genre: "Action", publisher: "343 Studios", imgSrc: "halo.png" },
    { id: 2, title: "Halo MCC", genre: "Action", publisher: "343 Studios", imgSrc: "halomcc.png" },
    { id: 3, title: "Hollow Knight", genre: "Metroidvania", publisher: "Team Cherry", imgSrc: "hollow.png" },
    { id: 4, title: "Dark Souls 3", genre: "Souls Like", publisher: "From Software", imgSrc: "darksouls3.png" },
    { id: 5, title: "Dead Space Remake", genre: "Horror", publisher: "EA", imgSrc: "deadspace.png" },
    { id: 6, title: "Terraria", genre: "Creative", publisher: "505 Studios", imgSrc: "terraria.png" },
    { id: 7, title: "Concord", genre: "Shooter", publisher: "Sony Interactive", imgSrc: "concord.png" },
    { id: 8, title: "Elden Ring", genre: "Souls Like", publisher: "From Software", imgSrc: "eldenring.png" },
    { id: 9, title: "Black Ops 6", genre: "Shooter", publisher: "Treyarch", imgSrc: "bo6.png" },
    { id: 10, title: "Mario Party", genre: "RPG", publisher: "Nintendo", imgSrc: "marioparty.png" },
    { id: 11, title: "Forza Horizon 4", genre: "Racing", publisher: "Playground Games", imgSrc: "fh4.png" },
    { id: 12, title: "Forza Horizon 5", genre: "Racing", publisher: "Playground Games", imgSrc: "fh5.png" },
    { id: 13, title: "Uncharted 4", genre: "Adventure", publisher: "Naughty Dog", imgSrc: "Uncharted4.png" },
    { id: 14, title: "God Of War (2016)", genre: "Action", publisher: "Santa Monica Studio", imgSrc: "godofwar.png" },
    { id: 15, title: "BloodBorne", genre: "Souls Like", publisher: "From Software", imgSrc: "bloodborne.png" },
    { id: 16, title: "Sekiro", genre: "Souls Like", publisher: "From Software", imgSrc: "sekiro.png" },
  ];

  // Filtered data based on search query
  const filteredData = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // State to track likes for each card
  const [likes, setLikes] = useState(
    cardData.reduce((acc, card) => {
      acc[card.id] = { liked: false, likeCount: Math.floor(Math.random() * 101) }; // Randomized likes between 0-100
      return acc;
    }, {})
  );

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: {
        liked: !prevLikes[id].liked,
        likeCount: prevLikes[id].liked
          ? prevLikes[id].likeCount - 1 // Decrement if previously liked
          : prevLikes[id].likeCount + 1, // Increment if not liked
      },
    }));
  };

  // Handle review submission (without navigation)
  const handleReviewSubmit = () => {
    if (review.trim() !== "") {
      // Retrieve existing reviews from localStorage
      const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
      // Add the new review to the array
      const newReviews = [...storedReviews, review];
      // Save the updated array back to localStorage
      localStorage.setItem("reviews", JSON.stringify(newReviews));
      // Clear the review input field
      setReview("");
    }
  };

  // Handle clearing the review box
  const handleClearReview = () => {
    setReview(""); // Clear the review box
  };

  return (
    <div className="container mt-3">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title, studio, or genre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Game Cards */}
      <div className="row gx-4 gy-5">
        {filteredData.length > 0 ? (
          filteredData.map((card) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={card.id}>
              <Card
                style={{
                  width: "17rem",
                  height: "26rem",
                  backgroundColor: "rgb(173, 209, 244)",
                  paddingTop: "8px",
                }}
              >
                <Card.Img
                  className="GameImg"
                  variant="top"
                  src={card.imgSrc}
                  style={{
                    width: "200px",
                    height: "220px",
                    objectFit: "cover",
                    margin: "auto",
                    display: "block",
                    outline: "1px solid #007bff",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1.5em",
                    }}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Title>{card.publisher}</Card.Title>
                  <Card.Text>{card.genre}</Card.Text>

                  {/* Like button */}
                  <Button
                    variant={likes[card.id]?.liked ? "success" : "primary"}
                    onClick={() => handleLike(card.id)}
                  >
                    {likes[card.id]?.liked
                      ? `Liked (${likes[card.id].likeCount})`
                      : `Like (${likes[card.id].likeCount})`}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <h3>No results found</h3>
            <p>Try searching for a different title, studio, or genre.</p>
          </div>
        )}
      </div>

      {/* Review Section  */}
      <div className="mb-4 mt-5">
        <textarea
          className="form-control"
          placeholder="Write your review here..."
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="mt-2">
          <Button variant="secondary" onClick={handleClearReview}>Clear</Button>
          <Button variant="primary" onClick={handleReviewSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
