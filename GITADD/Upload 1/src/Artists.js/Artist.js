import React from "react";
import "./Artist.css";

export const Info = [
  {
    name: "Pitbull",
    Imageurl:
      "https://www.kolpaper.com/wp-content/uploads/2021/01/Pitbull-Rapper-Wallpaper-12.jpg",
    cName: "artist-links",
    url: "/Pitsong",
  },
  {
    name: "Jenifer Loopez",
    Imageurl: "https://images.hdqwalls.com/wallpapers/jennifer-lopez-6.jpg",
    cName: "artist-links",
    url: "/Jenisong",
  },
  {
    name: "Radfoo",
    Imageurl:
      "https://wallsdesk.com/wp-content/uploads/2016/10/Redfoo-HD-Wallpaper.jpg",
    cName: "artist-links",
    url: "/Radfoosong",
  },
  {
    name: "Maroon 5",
    Imageurl:
      "https://c4.wallpaperflare.com/wallpaper/819/67/757/maroon-5-band-members-look-wallpaper-preview.jpg",
    cName: "artist-links",
    url: "/Maroonsong",
  },
  {
    name: "Alexandra Stan",
    Imageurl: "https://vistapointe.net/images/alexandra-stan-10.jpg",
    cName: "artist-links",
    url: "/Alexasong",
  },
  {
    name: "Akcent",
    Imageurl:
      "https://yt3.ggpht.com/a-/AAuE7mBqd7QZhmUSGGihg6ToElhFaEylHG6L0ME2Ag=s900-mo-c-c0xffffffff-rj-k-no",
    cName: "artist-links",
    url: "/Akcentsong",
  },
  {
    name: "Daddy Yankee",
    Imageurl:
      "https://allegra.flowersetcfresno.com/pic/3257657_full-fotos-de-fondo-de-pantalla-daddy-yankee-daddy-yankee-wallpapers-wallpaper-cave.jpg",
    cName: "artist-links",
    url: "/Dadyyankeesong",
  },
  {
    name: "Kishor Kumar",
    Imageurl: "https://pagalsongs.in/wp-content/uploads/2020/09/Kishore.jpg",
    cName: "artist-links",
    url: "/Kishorkumarsong",
  },
  {
    name: "Charlie Puth",
    Imageurl:
      "https://i.pinimg.com/originals/9c/89/9f/9c899f73af1a10a703d753371b8663db.jpg",
    cName: "artist-links",
    url: "/Puthsong",
  },
  {
    name: "Bruno Mars",
    Imageurl:
      "https://www.bosshunting.com.au/wp-content/uploads/2020/06/1be2fb6339fd0b69bf47cf96fd34d1e8-1027x560.jpg",
    cName: "artist-links",
    url: "/Brunosong",
  },
  {
    name: "Taylor Swift",
    Imageurl: "https://images4.alphacoders.com/104/1041724.jpg",
    cName: "artist-links",
    url: "/Taylorsong",
  },
  {
    name: "Jubin Nautiyal",
    Imageurl: "https://wallpapercave.com/wp/wp8847981.jpg",
    cName: "artist-links",
    url: "/Jubinsong",
  },
];

export default function Artis() {
  return (
    <>
      <div className="main-container">
        <ul className="Info-menu">
          {Info.map((item, index) => {
            return (
              <>
                <li key={index} className={item.cName}>
                  <a href={item.url}>
                    <img
                      className="art"
                      src={item.Imageurl}
                      alt="Artists"
                      width="250px"
                      height="250px"
                    />
                  </a>
                  <h2>{item.name}</h2>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
