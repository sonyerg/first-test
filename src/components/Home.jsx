/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Home.css";
import Desktop from "./Desktop";

export default function Home({ label }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`home-container ${isHovered ? "hovered" : ""} ${
        isChecked ? "checked" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={handleClick}
    >
      <p>{label}</p>
      <Desktop
        isHovered={isHovered}
        isChecked={isChecked}
        isActive={isActive}
      />
    </div>
  );
}
