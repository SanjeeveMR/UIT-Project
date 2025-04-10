import React from 'react';
import { Link } from "react-router-dom"; 


function Home() {
  return (
    <div className="homepage">
      <center>
      <header className="header">
        <h1>Sports Website</h1>
        <p>Your daily dose of sports news and updates!</p>
      
      <button><Link to="/live">live</Link></button>
        <button><Link to="/cricket">Cricket</Link></button>
        <button><Link to="/Football">Football</Link></button>
          <button><Link to="/tennis">Tennis</Link></button>
          <button><Link to="/contact">Contact Us</Link></button>
          </header>
      </center>
      <main className="main-content">
        <div className="sport-card">
          <h3>What is sports?</h3>
          <p>A human activity involving physical exertion and skill as the primary focus of the activity, 
            with elements of competition or social participation where rules and patterns of behaviour governing the activity exist formally through organisations and is generally recognised as a sport.</p>
          <section>
        <video controls src="src\videos\samplevideo.mp4" width="1200" height="400" type="video/mp4">
      your browser does not support the video tag
    </video>
        </section>
        </div>
        <section className="featured-sport">
          <h2>Featured Sports</h2>
          <div className="sport-cards">

            <div className="sport-card">
              <img src="https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/632423fec18a84019f9f5520_Cricket%20Pitch.jpg" alt="Cricket"   height="400" width="1400"/>
              <h3>Cricket</h3>
              <p>Cricket is played by two teams of 11, with one side taking a turn to bat a ball and score runs, while the other team will bowl and field the ball to restrict the opposition from scoring. The main objective in cricket is to score as many runs as possible against the opponent. Before the match begins, the captain of both teams will toss a coin, with the winner of the toss being able to decide which team bats and fields first.Learn more about cricket, its rules, and famous players.</p>
              <Link to="/cricket">Read More</Link>
            </div>
            
            <div className="sport-card">
              <img src="https://img.playbuzz.com/image/upload/ar_1.8867924528301887,c_crop/v1550766670/biah8mdevjbjdrusxagh.jpg" alt="Football"   height="400" width="1400"/>
              <h3>Football</h3>
              <p>Football (Soccer) is one of the oldest sports in the world and with that; it’s also one of the most recognised. The pinnacle of the international game comes in the form the Football World Cup.Stay updated on the latest football news and leagues.</p>
              <Link to="/football">Read More</Link>
            </div>
        
  
            <div className="sport-card">
              <img src="https://www.sportweek.fr/wp-content/uploads/2017/03/Raquette-de-Tennis.jpg" alt="Tennis"  height="400" width="1400"/>
              <h3>Tennis</h3>
              <p>Get the latest tennis news and updates on major tournaments,Tennis, game in which two opposing players (singles) or pairs of players (doubles) use tautly strung rackets to hit a ball of a specified size, weight, and bounce over a net on a rectangular court.</p>
              <Link to="/tennis">Read More</Link>
            </div>
          </div>
        </section>
        <br></br>
        <section>
          <video src="src\videos\samplevideo.mp4" width="1300" height="800"></video>
        </section>

        <section className="latest-news">
          <h2>Latest Sports News</h2>
          <ul>
            <li>Cricket World Cup: India to face Australia in the semi-final!</li>
            <li>Football: Real Madrid signs a new player from Barcelona!</li>
            <li>Tennis: Serena Williams wins the US Open!</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Sports World | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
