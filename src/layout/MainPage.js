import React from "react";
import CSSIcon from "../images/css-icon.png";
import HTMLIcon from "../images/html-icon.png";
import URLIcon from "../images/url-icon.png";
function MainPage(props) {
  return (
    <div className="main-page">
      <div className="main1">
        <h3>Lorem ipsum dolor sit asmet?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="main2">
        <div>
          {" "}
          <h3>Lorem ipsum dolor sit asmet?</h3>{" "}
          <img src={CSSIcon} style={{float:'left'}}/>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
        <div>
          {" "}
          <h3>Lorem ipsum dolor sit asmet?</h3>{" "}
          <img src={HTMLIcon} style={{float:'left'}}/>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
        <div>
          {" "}
          <h3>Lorem ipsum dolor sit asmet?</h3>{" "}
          <img src={URLIcon} style={{float:'left'}}/>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
