import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
// import {
// } from '@material-ui/core/';
import { 
  characterList,
} from './characters/';
import SwipableTabs from './SwipableTabs';
import Dropdown from './Dropdown';

const useStyles = makeStyles(theme => ({
  characterSelect: {
    textAlign: 'center'
  },
}));

export default function CharacterSelect() {
  const [value, setValue] = React.useState(0);
  const css = useStyles();
  const onCharacterSelect = (index) => {
    console.log('onCharacterSelect', index);
    setValue(index);
  }
  return (
    <div className={cn(css.characterSelect)}>
      {value}
      <Dropdown 
        list={characterList} 
        onChange={onCharacterSelect}
        selected={value}
      />
      <SwipableTabs 
        list={characterList} 
        onChange={onCharacterSelect}
        selected={value}
      />
    </div>
  );
}
