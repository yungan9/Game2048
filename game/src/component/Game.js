import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";

export default function Game() {
  const [tileList, setTileList] = useState([]);
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, () => (
          <div className="grid-row">
            {times(MAX_POS, () => (
              <div className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map((item) => (
          <div
            className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}
          >
            <div className="time-inner">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
