import { useState, useRef } from "react";
import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import s from "./PlaneButton.module.css";

const PlaneButton = ({
  title,
  size,
  bgColor = "white",
  color = "black",
  disable,
  width,
  height,
  icon,
  iconColor,
  iconHeight,
  iconWidth,
  iconStroke,
  iconPosition = "before",
}) => {
  const [startAnimate, setStartAnimate] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setStartAnimate(true);
  };

  return (
    <div
      className={cn(s.container, {
        [s[iconPosition]]: iconPosition,
        [s.active]: startAnimate,
      })}
      style={{ width: width, height: height }}
    >
      <button
        className={cn(s.button, {
          [s.active]: startAnimate,
        })}
        style={{ backgroundColor: bgColor, color: color }}
        ref={inputRef}
        onClick={handleClick}
      >
        {typeof icon == "string" && !icon.includes(".") ? (
          <i
            className={`${icon}`}
            style={{
              color: iconColor,
              width: iconWidth,
              height: iconHeight,
              fontWeight: iconStroke,
            }}
          />
        ) : (
          <img
            src={icon}
            style={{
              color: iconColor,
              width: iconWidth,
              height: iconHeight,
              fontWeight: iconStroke,
            }}
          />
        )}
        {icon && title ? <span className={s.space}></span> : null}
        {title && <span>{title}</span>}
        <div className={s.left}></div>
        <div className={s.right}></div>
        <div className={s.middle}></div>
        <div className={s.tail}></div>
      </button>
    </div>
  );
};
PlaneButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disable: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["before", "after"]),
  iconColor: PropTypes.string,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  iconStroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { PlaneButton };
