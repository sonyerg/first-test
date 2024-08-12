/* eslint-disable react/prop-types */
import "./Desktop.css";

export default function Desktop({ isHovered, isChecked, isActive }) {
  return (
    <label
      className={`checkbox-container ${isHovered ? "hovered" : ""} ${
        isChecked ? "checked" : ""
      } ${isActive ? "active" : ""}`}
    >
      <input type="checkbox" checked={isChecked} readOnly />
    </label>
  );
}
