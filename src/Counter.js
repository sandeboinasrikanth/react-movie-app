import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

//props - properties pass aruguments to components
// hook - make react listen change
//hook- function - 'use' - useState
//const [state, setstate]=useState(InitialValue);
//state - current value
// setState - function - update State -informing react that react is change
export function Counter() {
  //let like =10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // onClick & all event listeners - camelCase
  // Task - build dislike button - dislike should be increase
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setDislike(dislike + 1);
  return (
    <div>
      <IconButton onClick={incrementLike}  color="primary" aria-label="like button">
        <Badge badgeContent={like} color="success">
          👍
        </Badge>
      </IconButton>

      <IconButton onClick={incrementDislike}  color="primary" aria-label="dislike button">
        <Badge badgeContent={dislike} color="error">
        👎  
        </Badge>
      </IconButton>
      
    </div>
  );
}
