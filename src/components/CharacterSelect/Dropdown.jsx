import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  NativeSelect,
  FormControl,
  FormHelperText,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const {
    list,
    onChange,
    selected,
  } = props;
  return (
    <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={selected}
          name="character"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          inputProps={{ 'aria-label': 'character' }}
        >
          { selected === null ? <option value="" /> : null }
          {
            list.map((item, i) => {
                return (
                  <option value={i}>
                    {item.label}
                  </option>
                );
              }
            )
          }
        </NativeSelect>
        <FormHelperText>Pick Character</FormHelperText>
      </FormControl>
  );
}