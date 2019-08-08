import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [state, /*setState*/] = React.useState({
    character: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // const handleChange = name => event => {
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-dropdown">
        Character
      </InputLabel>
      <Select
        native
        value={state.age}
        onChange={(e) => {
          e.preventDefault();
        }}
        input={
          <OutlinedInput 
            name="character" 
            labelWidth={labelWidth} 
            id="outlined-dropdown" 
          />
        }
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  );
}