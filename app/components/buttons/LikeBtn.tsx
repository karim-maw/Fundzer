"use client";

import { Heart } from "phosphor-react";
import { useState } from "react";

export default function LikeBtn() {
  const [heart, setHeart] = useState(false);

  function handleClick() {
    setHeart(!heart);
  }

  console.log(heart);

  return (
    <div>
      <button onClick={handleClick}>
        {!heart ? (
          <Heart size={20} />
        ) : (
          <Heart size={20} className="text-red-500" />
        )}
      </button>
    </div>
  );
}
