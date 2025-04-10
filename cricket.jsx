import React from 'react';
import { Link } from 'react-router-dom'; 


function Cricket() {
  return (
    <div className="cricket_page">
      <header className="header">
        <h1>Cricket World</h1>
        <p>Welcome to the world of Cricket, where passion meets the game!</p>
        <button><Link to="/">Home</Link></button>
       <button><Link to="/live">live</Link></button>
        <button><Link to="/Football">Football</Link></button>
          <button><Link to="/tennis">Tennis</Link></button>
          <button><Link to="/contact">Contact Us</Link></button>
          </header>

      <section id="about-cricket">
       
        <h2>What is Cricket?</h2>
        <p>
          Cricket is a bat-and-ball game played between two teams of eleven players each. The game is played on an oval-shaped field with a 22-yard pitch at the center.
 It is one of the most popular sports globally,especially in countries like India, Australia, England, Pakistan, and South Africa.The game has three main formats: Test cricket, 
 One Day Internationals (ODIs), and Twenty20 (T20).Cricket is played by two teams of 11, with one side taking a turn to bat a ball and score runs,while the other team will bowl 
and field the ball to restrict the opposition from scoring. The main objective in cricket is to score as many runs as possible against the opponent. Before the match begins,
the captain of both teams will toss a coin, with the winner of the toss being able to decide which team bats and fields first.

Each cricket match consists of periods known as innings, and the number of innings that each team has will be determined before the match, 
usually one or two. During an inning, one team bats the ball while the other attempts to field.Both teams take turns alternating between batting 
and fielding.The match takes place on an oval cricket field, which consists of a rectangular pitch in the center. A boundary marks the perimeter of the field, 
and can take the form of a fence, ropes or lines.While the game is in progress, all 11 members of the fielding team have to be on the field, 
but only two members of the batting team are allowed to be on the playing ground. A player is selected from the fielding team and he is known as the bowler,
 while the rest of the 10 players are known as fielders.
The role of the batsman is to prevent the wicket from getting hit by the ball. Additionally, in order to score a run, both batsman have to run from their respective wickets to the other 
as many times as possible after a ball has been hit.

        </p>
        <img src="https://tse4.mm.bing.net/th?id=OIP.e2P3ReDBMC5G87UnoHrt3wHaEM&pid=Api&P=0&h=180" alt="Cricket Match" height="400" width="1200" />
      </section>

      <section id="history-cricket">
        <h2>History of Cricket</h2>
        <p>
          Cricket originated in England during the 16th century, and by the 17th century, it had become one of the most popular sports in the country. The modern version of cricket evolved in the 19th century and quickly spread to other parts of the British Empire. 
          Today, cricket is played in many countries, and international competitions like the ICC Cricket World Cup have become global events.The origins of cricket are not entirely clear, but it is believed to have been derived from ancient bat-and-ball games that were played in Europe, 
          particularly in England.There are references to games similar to cricket being played as far back as the 13th century.
        </p>
        <img src="https://www.latrobe.edu.au/news/images/articles/cricket-resized.jpg" alt="History of Cricket"  height="400" width="1200"/>
      </section>

      <section id="top-cricket-teams">
        <h2>Top Cricket Teams</h2>
        <ul>
          <li>India</li>
          <li>Australia</li>
          <li>England</li>
          <li>South Africa</li>
          <li>New Zealand</li>
        </ul>
        <img src='https://wallpapercave.com/wp/wp9265139.jpg' alt="Top Cricket Teams"  height="400" width="1200"/>
      </section>
<section id="highlights">
  <h2>IPL Stadium</h2>

  <video controls src="src\videos\cricket.mp4"  alt="highlights" width="1200" height="400" type="video/mp4">
      your browser does not support the video tag
    </video>
</section>
      <section id="famous-cricket-players">
        <h2>Famous Cricket Players</h2>
        <ul>
          <li>Sachin Tendulkar (India)</li>
          <li>Shane Warne (Australia)</li>
          <li>Virat Kohli (India)</li>
          <li>Brian Lara (West Indies)</li>
          <li>Jacques Kallis (South Africa)</li>
        </ul>
        <img src="https://www.dailyexcelsior.com/wp-content/uploads/2019/07/Dhoni-1.jpg" alt="Famous Cricket Players" height="400" width="1200" />
      </section>

      <section id="major-cricket-tournaments">
        <h2>Major Cricket Tournaments</h2>
        <ul>
          <li>ICC Cricket World Cup</li>
          <li>ICC T20 World Cup</li>
          <li>Indian Premier League (IPL)</li>
          <li>Big Bash League (BBL)</li>
          <li>County Championship</li>
        </ul>
        <img src="https://www.sportzcraazy.com/wp-content/uploads/2018/10/Famous-Cricket-tournaments.png" alt="Cricket Tournaments"  height="400" width="1200"/>
      </section>

      <section id="cricket-scoring">
        <h2>Cricket Scoring System</h2>
        <p>
          In cricket, a match can be played in various formats, such as Test matches, ODIs, and T20s. Each format has its own rules regarding overs and the number of innings. In general:
          - 1 run is scored when the batsman hits the ball and runs between the wickets.
          - Boundaries: A ball hit to the edge of the field scores 4 runs, while a ball hit outside the boundary without touching the ground scores 6 runs.
          - Wickets: A team is out when the batsman is dismissed, which can happen in several ways such as being bowled, caught, or run out.
        </p>
        <img src="https://4.bp.blogspot.com/-yw0Cqed-NKU/WnxeBtJ6vCI/AAAAAAAACr0/mtsfQRex5eI9jXQ1TbEvjfbBwiTOzrAQACLcBGAs/s1600/criket-scoreboard-design.jpg" alt="Cricket Scoring" height="400" width="1200" />
      </section>

      <section id="latest-cricket-news">
        <h2>Latest Cricket News</h2>
        <ul>
          <li>Sachin Tendulkar announces retirement from international cricket.</li>
          <li>India wins ICC Cricket World Cup 2023!</li>
          <li>Virat Kohli breaks the record for most runs in ODIs.</li>
        </ul>
        <img src="https://www.newsgater.com/wp-content/uploads/2021/02/India-vs-England-2nd-Test-Day-2-Live-Cricket-Score.jpg" alt="Cricket News"  height="400" width="1200" />
      </section>
      <br></br>
      <section>
        <h2>CSK VS MI </h2>
        <video controls src="https://media.istockphoto.com/id/1759898587/video/cricket-tv-broadcast-montage-with-game-statistics-on-screen-two-indian-teams-playing-in-a.mp4?s=mp4-640x640-is&k=20&c=FXoyBIgEHhVB17rpkp0AE_0hV7OwJNP19AAl_GalXeM="  alt="highlights" width="1200" height="400" type="video/mp4">
      your browser does not support the video tag
    </video>
        </section>
      <footer className="footer">
        <p>&copy; 2025 Cricket World | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Cricket;
