import React, { useState } from "react";
import "../Style/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Jalal Ali",
      username: "a1i7ev_c",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fgyd3-1.fna.fbcdn.net/v/t1.0-9/65377856_460427218024033_731375515385987072_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Y4KnFqU4qH4AX9A109J&_nc_ht=scontent.fgyd3-1.fna&oh=f9add2f9bd01fe94ef3d02d80c188ced&oe=5F709F86",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fgbb1-1.fna.fbcdn.net/v/t1.0-9/65377856_460427218024033_731375515385987072_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Y4KnFqU4qH4AX_WfvJm&_nc_ht=scontent.fgbb1-1.fna&oh=ba1ba4e82e37c94180610c719a74112c&oe=5F709F86" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
