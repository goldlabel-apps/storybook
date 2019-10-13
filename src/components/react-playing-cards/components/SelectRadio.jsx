/*
    Just a set of controls to show off our cards to be honest
*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Grid,
} from '@material-ui/core/';

const styles = theme => ({
    selectRadio: {
        // border: '1px solid red',
        margin: theme.spacing(1),
    }
});

class SelectRadio extends Component {

    render() {
        const {
            classes,
            selectObj
        } = this.props;
        if (!selectObj) { return null };
        const { id, title, items, value, onSelect } = selectObj;
        let suit = value;
        return (
            <div className={cn(classes.selectRadio)}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup
                        aria-label={title}
                        name={id}
                        value={suit}
                        onChange={(e) => {
                            onSelect(e.target.value);
                        }}>
                        <Grid container>
                            {items.map((item, i) => {
                                return (
                                    <Grid item
                                        key={`grid_${item.value}_${i}`}
                                        xs={6}>
                                        <FormControlLabel
                                            size={`small`}
                                            label={item.label}
                                            value={item.value}
                                            control={<Radio
                                                color={`default`}
                                            />}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </RadioGroup>
                </FormControl>

            </div>
        );
    }
}

export default withStyles(styles)(SelectRadio);
