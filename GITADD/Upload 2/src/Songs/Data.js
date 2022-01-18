import React from "react";
import "./Data.css";

const Pitinfo = [
  {
    name: "Pitbull Rapper",
    info: `Armando Christian Pérez, known by the stage name Pitbull or
Mr. Worldwide, is an American rapper. His first recorded
mainstream performance was on a solo track from Lil Jon's
2002 album Kings of Crunk. In 2004, Pitbull released his
debut album M.I.A.M.I. under TVT Records. It included
production producers Lil Jon and Jim Jonsin. Pitbull later
released his second album El Mariel, in 2006 and his third,
The Boatlift, in 2007. His fourth album, Rebelution (2009),
included his breakthrough hit single "I Know You Want Me
(Calle Ocho)", which peaked at number two on the US
Billboard Hot 100.
`,
    image:
      "https://c4.wallpaperflare.com/wallpaper/780/431/651/rapper-top-music-artist-and-bands-singer-pitbull-wallpaper-preview.jpg",
    alt: "Pitbull",
  },
];

export default function Pitbull(props) {
  console.log(props.information);
  return (
    <>
      <div className="Main">
        <div className="Artist-info">
          {props.information.map((item, index) => {
            return (
              <>
                <div className="Image" key={index}>
                  <img src={item.image} alt={item.alt} className="thisimg" />
                </div>
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
