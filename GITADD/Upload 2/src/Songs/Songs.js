import React from "react";

import "./Songs.css";

const Pit = [
  {
    songName: "Pitbull - Rain Over Me ft. Marc Anthony",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=SmM0653YvXU",
    songImg:
      "http://4.bp.blogspot.com/-u0kGZA8fMrA/TlxpSi3VyFI/AAAAAAAABZw/Hx-YAKIPFrM/w1200-h630-p-k-no-nu/Pitbull+ft+Marc+Anthony+-+Rain+Over+Me+-+www.Bwhd.blogspot.com++.jpg",
  },
  {
    songName: "We Are One (Ole Ola)",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=TGtWWb9emYI",
    songImg: "https://m.media-amazon.com/images/I/91vb40hZ46L._SS500_.jpg",
  },
  {
    songName: "Pitbull - International Love",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=CdXesX6mYUE",
    songImg: "https://i.ytimg.com/vi/iK18_Hz7NLc/maxresdefault.jpg",
  },
  {
    songName: "Pitbull - Give Me Everything",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=EPo5wWmKEaI",
    songImg:
      "https://i1.sndcdn.com/artworks-NEDCI2UKEDNwmNES-4tHgVg-t500x500.jpg",
  },
  {
    songName: "Pitbull - Timber",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=hHUbLv4ThOo",
    songImg: "https://m.media-amazon.com/images/I/61dMNxbGB-L.jpg",
  },
  {
    songName: "Pitbull - Bon Bon",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=wVz4JbMlD90",
    songImg: "https://m.media-amazon.com/images/I/71B-AwlSAOL._SS500_.jpg",
  },
  {
    songName: "Pitbull - Greenlight ",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=R7xbhKIiw4Y",
    songImg: "https://pitbullupdates.files.wordpress.com/2016/07/img_8857.jpg",
  },
  {
    songName: "Live It Up",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=JmAW1h7j9CM",
    songImg:
      "https://media.gettyimages.com/photos/rapper-pitbull-performs-during-kaaboo-texas-music-festival-at-the-att-picture-id1143587680?s=612x612",
  },
  {
    songName: "i party like a rockstar",
    cName: "Pitbull",
    songLink: "https://www.youtube.com/watch?v=SV47BrGFnP4",
    songImg:
      "https://i.pinimg.com/originals/16/03/43/1603432c8d7f80eb295714bdae1561db.jpg",
  },
];

const Jenifer = [
  {
    songName: "On The Floor ft. Pitbull",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=t4H_Zoh7G5A",
    songImg:
      " https://i1.sndcdn.com/artworks-lV8Sy29JJ7G4CQZy-lzZO6g-t500x500.jpg",
  },
  {
    songName: "Jennifer Lopez - Papi",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=6XbIuSLaCnk",
    songImg: "https://www.birthdayjams.com/img/6XbIuSLaCnk.jpg",
  },
  {
    songName: "Let's Get Loud ",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=Q91hydQRGyM",
    songImg:
      "https://pics.esmemes.com/lets-get-loud-werq-dance-fitness-workout-62514816.png",
  },
  {
    songName: "If You Had My Love",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=lYfkl-HXfuU",
    songImg: "https://i.ytimg.com/vi/EBOOad16wwk/hqdefault.jpg",
  },
  {
    songName: "Do It Well",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=5dnTLx4XQDI",
    songImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3onLRfK_Bp3-xrlJORrFaCXTXCsyX0_wX4SF-4w6RuQZN7bzB9_HTfdUWRVGUPRy0KCo&usqp=CAU",
  },
  {
    songName: " Goin' In ft. Flo Rida",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=z5W7DVFKrcs",
    songImg: "https://i.ytimg.com/vi/z5W7DVFKrcs/maxresdefault.jpg",
  },
  {
    songName: "I'm Into You",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=IgLcQmlN2Xg",
    songImg: "https://m.media-amazon.com/images/I/81MDBxCC+QL._SS500_.jpg",
  },
  {
    songName: "Feel The Light",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=9fdAt0ke9w8",
    songImg:
      "https://i.dailymail.co.uk/i/pix/2015/03/20/18/26D8632A00000578-3004667-image-a-68_1426877049266.jpg",
  },
  {
    songName: "Amor, Amor, Amor",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=9t9u_yPEidY",
    songImg: "https://i1.sndcdn.com/artworks-000255083177-dyro0g-t500x500.jpg",
  },
  {
    songName: "Qué Hiciste",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=VAfSuuPMrp4",
    songImg: "https://cdn.wallpapersafari.com/20/94/YNsCoO.jpg",
  },
  {
    songName: "In The Morning",
    cName: "Jenifer",
    songLink: "https://www.youtube.com/watch?v=kk_HYB-AWrw",
    songImg:
      "https://www.hola.com/us/images/025c-0f4733816a0a-fb165c2801e2-1000/horizontal-480/jennifer-lopez-is-unrecognizable-in-tik-tok-throwback.jpg",
  },
];

export default function Song(props) {
  return (
    <>
      <h2 className="songnames">Songs</h2>
      <div className="Songs">
        <div className="items">
          {props.name.map((item, index) => {
            return (
              <>
                <a href={item.songLink} key={index}>
                  <img
                    src={item.songImg}
                    alt={item.songName}
                    className="pitimages"
                  />
                </a>
                {/* <span>
                  <h3 className="songhead">{item.songName}</h3>
                </span> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

{
  /* <span>
  <h3 className="songhead">{item.songName}</h3>
</span>; */
}
