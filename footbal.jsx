import React from "react";
import { Link } from "react-router-dom";

function Football() {
  return (
    <div className="football-page">
      <header className="header">
        <h1>Football World</h1>
        <p>Latest news, players, and updates from the football world!</p>
   
      <nav>
      <button><Link to="/">Home</Link></button>
       <button><Link to="/live">live</Link></button>
              <button><Link to="/cricket">Cricket</Link></button>
                <button><Link to="/tennis">Tennis</Link></button>
                <button><Link to="/contact">Contact Us</Link></button>
      </nav>
      </header>
      <section id="about-football">
        <h2>What is Football?</h2>
        <p>
          Football, also known as soccer in some countries, is a team sport played between two teams of eleven players on a rectangular field with a goal at each end.
          The objective of the game is to score by getting the ball into the opposing goal. Football is the most popular sport worldwide,
           played by over 250 million people across 200 countries.
          The aim of football is to score more goals then your opponent in a 90 minute playing time frame. The match is split up into two halves of 45 minutes. 
          After the first 45 minutes players will take a 15 minute rest period called half time.
          The second 45 minutes will resume and any time deemed fit to be added on by the referee (injury time) will be accordingly.
        </p>
       
        <video controls src="https://media.istockphoto.com/id/518295100/video/soccer-player-makes-a-dramatic-play.mp4?s=mp4-640x640-is&k=20&c=zvAkXjPM9EIKNnKK-ctZFaeautRwjqwQCHtpO6kGDGk=" width="1200" height="400" type="video/mp4">
      your browser does not support the video tag
    </video>
      </section>

      <section id="famous-players">
        <h2>Famous Football Players</h2>
        <ul>
          <li>Lionel Messi</li>
          <li>Cristiano Ronaldo</li>
          <li>Neymar Jr.</li>
          <li>Kylian Mbappé</li>
          <li>Mohamed Salah</li>
        </ul>
      </section>

      <section id="history-football">
        <h2>History of Football</h2>
        <p>
          Football originated in England in the 19th century, though the game has been played in various forms for thousands of years.
           The modern version of the sport was codified in the 1860s with the establishment of the English Football Association.
          The sport quickly spread to other parts of the world and became the global sport it is today, with major leagues, tournaments, and events attracting millions of fans every year.
        </p>
        <img src="https://images.afootballreport.com/afr/blog/history-of-football.jpg" alt="Football History"  height="350" width="1200"/>
      </section>

      <section id="top-football-teams">
        <h2>Top Football Teams</h2>
        <ul>
          <li>FC Barcelona</li>
          <li>Real Madrid</li>
          <li>Manchester United</li>
          <li>Juventus</li>
          <li>Bayern Munich</li>
        </ul>
        <img src="https://editorial.uefa.com/resources/0246-0e99f8d283dd-7ea3c5b23601-1000/cristiano_ronaldo_manchester_united_.jpeg" alt="Top Football Teams"  height="350" width="1200" />
      </section>

      <section id="famous-football-players">
        <h2>Famous Football Players</h2>
        <ul>
          <li>Lionel Messi (Argentina)</li>
          <li>Cristiano Ronaldo (Portugal)</li>
          <li>Neymar Jr. (Brazil)</li>
          <li>Kylian Mbappé (France)</li>
          <li>Zlatan Ibrahimović (Sweden)</li>
        </ul>
        <img src="https://i.ytimg.com/vi/TGtACZWU0TQ/maxresdefault.jpg" alt="Famous Football Players"  height="350" width="1200"/>
      </section>

      <section id="major-football-tournaments">
        <h2>Major Football Tournaments</h2>
        <ul>
          <li>FIFA World Cup</li>
          <li>Copa América</li>
          <li>UEFA Champions League</li>
          <li>Africa Cup of Nations</li>
          <li>English Premier League</li>
        
        </ul>
        <video controls src="src\videos\football.mp4" width="1200" height="400" type="video/mp4">
      your browser does not support the video tag
    </video>
      </section>

      <section id="football-scoring">
        <h2>Football Scoring System</h2>
        <p>
          In football, a match is played over two 45-minute halves, and the team that scores the most goals wins. Each team is allowed one goalkeeper and 10 outfield players.
          Goals are scored when the ball crosses the goal line between the two goalposts and beneath the crossbar. If the game ends in a tie, additional extra time or penalties are used in knockout stages of competitions.
        </p>
        <img src="https://img.freepik.com/premium-vector/football-game-statistics-scoreboard-template-football-championship-competition-scores-goals-info-board_8071-4091.jpg?w=2000" alt="Football Scoring" height="350" width="1200"/>
      </section>

      <section id="latest-football-news">
        <h2>Latest Football News</h2>
        <ul>
          <li>Lionel Messi wins the Ballon d'Or for a record seventh time.</li>
          <li>Cristiano Ronaldo breaks the all-time scoring record in UEFA Champions League.</li>
          <li>Manchester City wins the Premier League 2025 season.</li>
        </ul>
        <video controls src="https://media.istockphoto.com/id/1436706152/video/soccer-football-match-satdium-championship-blue-team-starts-game-with-a-kickoff-attacks-red.mp4?s=mp4-640x640-is&k=20&c=iM-k8J71NuBwtjbsogICoNTfZXHqmt6JmTjzHjQXoiU=" alt="Football News" height="400" width="1450" type="video/mp4">
       </video>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Football World | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Football;
