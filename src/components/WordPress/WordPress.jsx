import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Button,
    CssBaseline,
    Typography,
    // Typography
} from '@material-ui/core/';

/* 
Turns out you can't do this because github won't let you. 
They don't want you using the service as a cdn. 
Which is exactly what I'm trying to do here.
They control that with CORS by the way
*/
const markdownIndex = `https://docs.listingslab.com/markdown/index.json`;

const styles = theme => ({
    markdown: {
        height: '100vh',
        backgroundImage: 'radial-gradient(#fff, #ccc)',
        padding: theme.spacing(),
    },
    btn: {
        margin: theme.spacing(0.5),
    },
});

class WordPress extends Component {

    loadIndex = (e) => {
        console.log('loadIndex');

        fetch(markdownIndex, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json charset=utf-8"
            }
        })
            .then((response) => {
                return response;
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('data', data);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.markdown)}>
                <CssBaseline />
                <Typography variant={`h3`}>
                    WordPress?
                </Typography>
                <Button
                    className={cn(classes.btn)}
                    variant={`outlined`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(markdownIndex, '_blank')
                    }}>
                    View
                </Button>

                <Button
                    className={cn(classes.btn)}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                        this.loadIndex();
                    }}>
                    Load
                </Button>

                <Typography variant={`body1`}>
                    Turns out you can't do this because github won't let you.
                    They don't want you using the service as a cdn.
                    Which is exactly what I'm trying to do here.
                    They control that with CORS by the way
                </Typography>

            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(WordPress);
