import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline
} from '@material-ui/core/';

const useStyles = makeStyles({
    cakeLady: {
        background: 'black',
        border: '1px solid red',
    },
});

export default function CakeLady(props) {
    const classes = useStyles();
    const c = {
        title: `Cake Lady`,
        backgroundColor: `#ccc`,
    }
    const { storybook } = props;
    if (storybook) {
        if (storybook.title) c.title = storybook.title;
        if (storybook.backgroundColor) c.backgroundColor = storybook.backgroundColor;
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.cakeLady}>
                <h1>
                    {c.title}
                </h1>
            </div>
        </React.Fragment>
    );
}
