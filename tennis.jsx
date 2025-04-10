import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


function Tennis() {
  return (
    <div className="tennis-page">
      <header className="header">
        <h1>Tennis World</h1>
        <p>The latest tennis news, tournaments, and players!</p>
      
<button><Link to="/">Home</Link></button>
 <button><Link to="/live">live</Link></button>
        <button><Link to="/cricket">Cricket</Link></button>
        <button><Link to="/Football">Football</Link></button>
          <button><Link to="/contact">Contact Us</Link></button>
          </header>
      <section id="about-tennis">
        <h2>What is Tennis?</h2>
        <p>
          Tennis is a sport played between two individuals (singles) or two teams of two players each (doubles). 
          Players use rackets to strike a ball over a net into the opponent's court, with the goal of making it difficult for the opponent to return the ball. 
          Tennis can be played on various surfaces like grass, clay, and hard courts.
        </p>
        <img src="https://tse4.mm.bing.net/th?id=OIP.9Kj5Cw1IXPi5WkcPet22FQHaEK&pid=Api&P=0&h=180" alt="Tennis Court" height="350" width="1300"/>
      </section>
      <br></br>
      
      <section id="history-tennis">
        <h2>History of Tennis</h2>
        <p>
          Tennis originated in France in the late 12th century as a handball game, which eventually evolved into the racket sport we know today. 
        The game gained international popularity and underwent major transformations in the 19th century, with the first Wimbledon tournament taking place in 1877. 
        Tennis has grown to be one of the most popular sports globally, with iconic tournaments and stars.The game of tennis played on a rectangular court with a net running across the centre.
        The aim is to hit the ball over the net landing the ball within the margins of the court and in a way that results in your opponent being unable to return the ball.
        You win a point every time your opponent is unable to return the ball within the court.See how the game has changed. 
        <img src="https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imagepsa4-1688479896728.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"  alt="Tennis Court" height="350" width="1300"/>
                </p>
      </section>
      <br></br>
      <hr></hr>
      <section id="top-tennis-players">
        <h2>Top Tennis Players</h2>
        <ul>
          <li>Roger Federer</li>
          <li>Serena Williams</li>
          <li>Rafael Nadal</li>
          <li>Novak Djokovic</li>
          <li>Naomi Osaka</li>
        </ul>
        <img src="http://www.zastavki.com/pictures/originals/2017Sport_Tennis_player_Rafael_Nadal_with_a_racket_on_the_court_112605_.jpg" alt="Tennis Court" height="350" width="1300"/>
      </section>

      <section id="major-tournaments">
        <h2>Major Tennis Tournaments</h2>
        <ul>
          <li>Wimbledon (Grass Court)</li>
          <li>The US Open (Hard Court)</li>
          <li>French Open (Clay Court)</li>
          <li>Australian Open (Hard Court)</li>
        </ul>
      </section>
<br></br>
<hr></hr>
      <section id="tennis-scoring">
        <h2>Tennis Scoring System</h2>
        <p>
          The scoring system in tennis consists of points, games, sets, and matches. A player must win four points to win a game, and 
          a set is won by winning six games (with at least a two-game lead). Matches are played best of three or five sets, depending on the tournament.
        You need to score four points to win a game of tennis. The points are known as 15 (1 point), 30 (two points),40 (three points) and the fourth would result in the winning point and the end of that game. 
        If the scores went to 40-40 this would be known as deuce, When a game reaches deuce the player must then win by two clear points.
        <img src="https://racketrampage.com/wp-content/uploads/2021/09/tennis-scoreboard-1024x683.jpg" alt="Tennis Court" height="350" width="1300"/>
  </p>
      </section>
      <br></br>
      <hr></hr>
      <section id="latest-news">
        <h2>Latest Tennis News</h2>
        <ul>
          <li>Roger Federer announces retirement after a 20-year career.</li>
          <li>Serena Williams secures her 23rd Grand Slam at the US Open.</li>
          <li>Novak Djokovic wins his 20th Grand Slam at Wimbledon.</li>
        </ul>
        
      <hr></hr>
      <section>
      <video controls src="src\videos\tennis.mp4"  alt="highlights" width="1500" height="400" type="video/mp4"></video>
      </section>
      </section>
      <br></br>
      <hr></hr>
      <footer className="footer">
        <p>&copy; 2025 Tennis World | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Tennis;
