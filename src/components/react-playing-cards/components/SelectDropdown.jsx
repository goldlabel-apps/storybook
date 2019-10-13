import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core/';

const styles = theme => ({
    selectDropdown: {
    },
    formControl: {
        width: '100%',
    },
    white: {
        color: 'white',
    }
});

class SelectDropdown extends Component {

    render() {
        const {
            classes,
            selectObj
        } = this.props;
        if (!selectObj) { return null };
        const { id, title, items, value, onSelect } = selectObj;
        return (
            <div className={cn(classes.selectDropdown)}>
                <form autoComplete="off">
                    <FormControl
                        className={cn(classes.formControl)}>
                        <InputLabel htmlFor={id}>
                            {title}
                        </InputLabel>
                        <Select
                            name={id}
                            value={value}
                            onChange={(e) => {
                                onSelect(e.target.value);
                            }}
                            inputProps={{
                                name: title,
                                id,
                            }}>
                            {items.map((item, i) => {
                                return (
                                    <MenuItem
                                        key={`${item.id}_${i}`}
                                        value={item.value}
                                        onClick={item.onClick}
                                    >
                                        {item.label}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(SelectDropdown);
