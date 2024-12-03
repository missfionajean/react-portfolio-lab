import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { renderToNodeStream } from "react-dom/server";

function App() {
	const allRepos =
		"https://github.com/missfionajean?tab=repositories&q=&type=&language=&sort=";
	const mySkills = [
		{
			name: "JavaScript",
			blurb: "I am comfortable using JavaScript to solve complex problems, create interactive page elements/games and provide additional functionality to web apps.",
			link: "https://github.com/missfionajean?tab=repositories&q=&type=&language=javascript&sort=",
			frontEnd: true,
			backend: true,
		},
		{
			name: "CSS",
			blurb: "I have a solid understanding of CSS styling. I have used this language as my main form of styling in projects on my GitHub page.",
			link: "https://github.com/missfionajean?tab=repositories&q=&type=&language=css&sort=",
			frontEnd: true,
			backend: false,
		},
		{
			name: "HTML",
			blurb: "I am proficient in HTML and have designed a number of apps/websites using the language, as well as DOM manipulation to render new elements on the fly within a single page.",
			link: "https://github.com/missfionajean?tab=repositories&q=&type=&language=html&sort=",
			frontEnd: true,
			backend: false,
		},
		{
			name: "EJS",
			blurb: "I have combined my knowledge of HTML and JavaScript into EJS applications that use MVC structuring and server/database communication for intuitive CRUD functionality.",
			link: "https://github.com/missfionajean?tab=repositories&q=&type=&language=ejs&sort=",
			frontEnd: true,
			backend: true,
		},
	];

	return (
		<>
      <div id="page">
        <img src="images/face.png" alt="Picture of Fiona" width="200" />
        <h1>Fiona Jean</h1>
        <h2>Full-Stack Developer</h2>
        <h2>About</h2>
        <p>
          Hello! I am a full-stack developer, currently enrolled in
          General Assembly's Software Engineering Bootcamp. Check out what I've been working on so far:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Featured Project</h2>
          <p>
            Swoon is an in-browser game that uses JavaScript DOM
            manipulation and extensive CSS to run a full press-your-luck dating sim on a single webpage! Icons made by me using Canva Pro. All other assets rendered using CSS.
          </p>
          <img
            src="images/swoon.png"
            alt="Swoon Screenshot"
            width="400"
          />
          <a
            href="https://missfionajean.github.io/browser-based-game/"
            style={{
              fontSize: 24,
              margin: 15,
              padding: "10px 20px",
              border: "1px solid white",
              borderRadius: 5,
              backgroundColor: "#393939",
              color: "white"
            }}
          >
            Play Swoon Here!
          </a>
        </div>
        <h2>Skills</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {mySkills.map((skill) => (
            <li style={{ display: "flex", flexDirection: "column" }}>
              <h3>{skill.name}</h3>
              <p>{skill.blurb}</p>
              <a href={skill.link}>
                View {skill.name}-Specific Repos
              </a>
              <a href={allRepos}>View All Git Repos</a>
            </li>
          ))}
        </ul>
      </div>
		</>
	);
}

export default App;
