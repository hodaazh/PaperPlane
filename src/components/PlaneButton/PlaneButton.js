import { useState, useRef, useEffect } from "react";
import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import s from "./PlaneButton.module.css";

const PlaneButton = ({
  title,
  sentTitle,
  bgColor,
  color = "black",
  width,
  height,
  padding,
  icon,
  iconColor,
  iconHeight,
  iconWidth,
  iconStroke,
  iconPosition = "before",
  checkColor,
}) => {
  const [startAnimate, setStartAnimate] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setStartAnimate(true);
  };

  useEffect(() => {
    let r = document.querySelector(":root");
    r.style.setProperty("--primary", bgColor);
    r.style.setProperty("--success", checkColor);
  }, []);

  return (
    <div
      className={cn(s.container, {
        [s[iconPosition]]: iconPosition,
        [s.active]: startAnimate,
      })}
      style={{
        width: width,
        height: height,
        padding: padding,
        backgroundColor: bgColor,
      }}
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
      <span className={s.success}>
        <svg viewBox="0 0 18 18">
          <polyline points="3.75 9 7 12 13 5"></polyline>
        </svg>
        <span style={{ color: color }}>{sentTitle}</span>
      </span>
    </div>
  );
};
PlaneButton.propTypes = {
  title: PropTypes.string,
  sentTitle: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  disable: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["before", "after"]),
  iconColor: PropTypes.string,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  iconStroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checkColor: PropTypes.string,
};

export { PlaneButton };
