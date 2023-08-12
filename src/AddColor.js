import { useState } from "react";

function AddColor() {
  const [color, setColor] = useState("pink");

  const styles = {
    backgroundColor: color,
  };

  const INITIAL_COLOR_LIST = ["blue", "orange", "yellow"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);

  return (
    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a new color"
        style={styles} />
      <button onClick={() => setColorList([...colorList, color])}>
        AddColor
      </button>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: "400px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

export{AddColor,ColorBox};
