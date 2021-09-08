import { useState, useEffect, useRef } from "react";
import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { gsap, TweenMax } from "gsap";

import s from "./PlaneButton.module.css";

const PlaneButton = ({
  title,
  size,
  bgColor = "white",
  color = "black",
  disable,
  icon,
  iconColor,
  iconHeight,
  iconWidth,
  iconStroke,
  iconPosition = "before",
}) => {
  const btnSize = `-size-${size}`;
  const [style, setStyle] = useState({
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  });
  const [iconStyle, setIconStyle] = useState({
    color: `${iconColor}`,
    width: `${iconWidth}`,
    height: `${iconHeight}`,
    fontWeight: `${iconStroke}`,
  });
  const [width, setWidth] = useState(size);

  useEffect(() => {
    setStyle({ ...style, color: color });
    setIconStyle({
      ...iconStyle,
      color: iconColor,
      width: iconWidth,
      height: iconHeight,
      fontWeight: iconStroke,
    });
  }, [color, bgColor, iconColor, iconWidth, iconHeight, iconStroke]);

  const handleClick = () => {};

  return (
    <button
      className={cn(s.container, {
        [s[btnSize]]: btnSize,
        [s[iconPosition]]: iconPosition,
      })}
      style={style}
      onClick={(e) => handleClick}
    >
      {typeof icon == "string" && !icon.includes(".") ? (
        <i className={`${icon}`} style={iconStyle} />
      ) : (
        <img src={icon} style={iconStyle} />
      )}
      {icon && title ? <span className={s.space}></span> : null}
      {title && <span>{title}</span>}
      <div className={s.left} style={{ borderTopColor: `${bgColor}` }}></div>
      <div className={s.right} style={{ borderTopColor: `${bgColor}` }}></div>
      <div
        className={s.middle}
        style={{ borderBottomColor: `${bgColor}` }}
      ></div>
      <div className={s.tail}></div>
    </button>
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
