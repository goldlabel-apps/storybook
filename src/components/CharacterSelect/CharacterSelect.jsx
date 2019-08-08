import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
// import {
// } from '@material-ui/core/';
import { 
  characterList,
} from './characters/';
import { 
  // Dropdown,
  SwipableTabs,
} from '../';

const useStyles = makeStyles(theme => ({
  characterSelect: {
    //border: '1px solid red',
  },
  character: {
    maxHeight: 350,
  },
  vertAligned:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered:{
    textAlign: 'center',
  },
  grow:{
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));



export default function CharacterSelect() {
  const css = useStyles();
  const onCharacterSelect = (payload) => {
    console.log('onCharacterSelect', payload);
  }
  const currentCharacter = null;
  return (
    <div className={cn(css.characterSelect)}>
      <SwipableTabs 
        list={characterList} 
        onChange={onCharacterSelect}
        selected={currentCharacter}
      />
      {/* <Dropdown 
        list={characterList} 
        onChange={onCharacterSelect}
        selected={currentCharacter}
      /> */}
    </div>
  );
}
