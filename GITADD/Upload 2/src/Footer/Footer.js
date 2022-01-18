import React from "react";
import "../Footer/Footer.css";
const FooterData = [
  { url: "/", CaName: "Facebook", Cname: "fab fa-facebook" },
  { url: "/", CaName: "Google", Cname: "fab fa-google-plus-g" },
  { url: "/", CaName: "Twitter", Cname: "fab fa-twitter" },
  { url: "/", CaName: "Linked", Cname: "fab fa-linkedin" },
  { url: "/", CaName: "Pint", Cname: "fab fa-pinterest" },
  { url: "/", CaName: "Insta", Cname: "fab fa-instagram" },
];

function Copyright() {
  return (
    <>
      <div className="footer-copyright">
        <i className="far fa-copyright" /> 2021 Copyright:
        <a href="/"> OmiiMusic.com</a>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="flex-center">
                {FooterData.map((item, index) => {
                  return (
                    <a href={item.url} className={item.caName} key={index}>
                      <i className={item.Cname}> </i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
}
