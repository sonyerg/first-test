/* eslint-disable react/prop-types */
import "./Home.css";
import Desktop from "./Desktop";

export default function Home({ label }) {
  return (
    <div className="home-container">
      <p>{label}</p>
      <Desktop />
    </div>
  );
}
