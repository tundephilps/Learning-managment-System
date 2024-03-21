import React from "react";

const Videoplayer = () => {
  return (
    <div>
      <video width="100%" height="300" controls>
        <source
          src="https://youtu.be/2-crBg6wpp0?si=6zX8ILMo4meTmIu8"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Videoplayer;
