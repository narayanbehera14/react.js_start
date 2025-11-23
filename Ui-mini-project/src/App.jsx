import React from "react";
import Section1 from "./component/section1/Section1";
import Section2 from "./component/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://media.istockphoto.com/id/1779838792/photo/asian-woman-in-office-writing-notes-and-laptop-for-market-research-email-or-online-report-at.webp?a=1&s=612x612&w=0&k=20&c=_5PoF9xH_MkJwmCxjvrpjWdWjKMC1M_O7nvD8hDeaCQ=",
      color: "#ff4f4f",
      tag: "Satisfied",
    },
    {
      img: "https://media.istockphoto.com/id/1470004916/photo/collaborate-between-professional-businessman-and-partnership-group-of-business-people-point.webp?a=1&s=612x612&w=0&k=20&c=j6sMkGRTEs3bept30kVbQANzrPSeSa0tL3-wJGc9XyI=",
      color: "#6a5acd",
      tag: "Underserved",
    },
    {
      img: "https://media.istockphoto.com/id/1324830594/photo/diversity-multiethnic-team-group-of-business-people-present-meeting-conference-room.jpg?s=612x612&w=0&k=20&c=L5gD6YjbxoLp4JKwOrinUusPEb39OgOCk-kVp4kc5r4=",
      color: "#008080",
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
