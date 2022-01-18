import React from "react";

import Background from "../../Header/Back";
import Artist from "../Artist";
import Pitbull from "../../Songs/Data";
import Song from "../../Songs/Songs";
import {
  Pit,
  Jenifer,
  Radfoo,
  Marron,
  Alexandra,
  Akcent,
  Daddy,
  Kishor,
  Charlie,
  Bruno,
  Taylor,
  Jubin,
  Pitinfo,
  Jeniferinfo,
  Radfooinfo,
  Marooninfo,
  Alexandrainfo,
  Akcentinfo,
  Daddyinfo,
  Charlieinfo,
  Kishorinfo,
  Brunoinfo,
  Taylorinfo,
  Jubininfo,
} from "../../Header/Songs_Data";

export function Singer() {
  return (
    <>
      <Artist />
    </>
  );
}

export function Backk() {
  return (
    <>
      <Background />
    </>
  );
}

export function Pitb() {
  console.log({ Radfooinfo });
  return (
    <>
      <Pitbull information={Pitinfo} />
      <Song name={Pit} />
    </>
  );
}

export function Jeni() {
  return (
    <>
      <Pitbull information={Jeniferinfo} />
      <Song name={Jenifer} />
    </>
  );
}

export function Radf() {
  return (
    <>
      <Pitbull information={Radfooinfo} />
      <Song name={Radfoo} />
    </>
  );
}

export function Mar() {
  return (
    <>
      <Pitbull information={Marooninfo} />
      <Song name={Marron} />
    </>
  );
}

export function Alex() {
  return (
    <>
      <Pitbull information={Alexandrainfo} />
      <Song name={Alexandra} />
    </>
  );
}

export function Akc() {
  return (
    <>
      <Pitbull information={Akcentinfo} />
      <Song name={Akcent} />
    </>
  );
}

export function Yankee() {
  return (
    <>
      <Pitbull information={Daddyinfo} />
      <Song name={Daddy} />
    </>
  );
}

export function Char() {
  return (
    <>
      <Pitbull information={Charlieinfo} />
      <Song name={Charlie} />
    </>
  );
}

export function Kish() {
  return (
    <>
      <Pitbull information={Kishorinfo} />
      <Song name={Kishor} />
    </>
  );
}

export function Bru() {
  return (
    <>
      <Pitbull information={Brunoinfo} />
      <Song name={Bruno} />
    </>
  );
}

export function Tay() {
  return (
    <>
      <Pitbull information={Taylorinfo} />
      <Song name={Taylor} />
    </>
  );
}

export function Jub() {
  return (
    <>
      <Pitbull information={Jubininfo} />
      <Song name={Jubin} />
    </>
  );
}
