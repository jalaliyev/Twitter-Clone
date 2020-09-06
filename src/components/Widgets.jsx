import React, { useState } from "react";
import "../Style/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (active) setActive(false);
    else setActive(true);
  };
  return (
    <div className="widgets">
      <div
        className={`widgets_input ${active && "widget_activeInput"} `}
        onClick={handleClick}
      >
        <SearchIcon
          className={`widgets_searchIcon ${
            active && "widget_activeSearchIcon"
          }`}
        />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="jalalali"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://www.facebook.com/profile.php?id=100021702750162"
          options={{ text: "#reactjsisawesome", via: "jalali" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
