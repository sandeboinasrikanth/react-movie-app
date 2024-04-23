import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Badge from '@mui/material/Badge';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';




//hook -make react listen to change
// hook -function - 'use' -useState
// const [state, setState]= useState(Initial Value)
// state -current value
// setState - function - update State - informing react that state is changed

export function Counter() {
  // let like =10;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);

  const styles ={
    color:"yellow",
  }
  return <div className='counters-container'>
    <IconButton className='like-button'  aria-label="counter" onClick={incrementLike}>
      <Badge badgeContent={like} color="primary"  >
      <ThumbUpIcon color="secondary" />
      {/* 👍 */}
      </Badge>
    </IconButton>

    <IconButton className='dislike-button' aria-label="counter"  onClick={incrementDisLike}>
      <Badge badgeContent={disLike} color="error"  >
        <ThumbDownIcon color="secondary" />
        {/* 👎 */}
      </Badge>
    </IconButton>

    
  </div>;
}
