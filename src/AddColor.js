import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    backgroundColor: color,
  };

  const INITIAL_COLOR_LIST = ["deepskyblue", "orange", "purple"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);
  return <div>
    <input
      value={color}
      onChange={(event) => setColor(event.target.value)}
      style={styles}
      type="text"
      placeholder='Enter a color' />
    {/* copy the colorList & add the newColor to it */}
    <button onClick={() => setColorList([...colorList, color])}>AddColor</button>

    {colorList.map((clr, index) => (
      <ColorBox color={clr} key={index} />
    ))}

  </div>;
}
