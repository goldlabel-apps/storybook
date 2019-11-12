import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import zooPartySrc from './ZooParty.jpg';
import {
    CssBaseline
} from '@material-ui/core/';

const useStyles = makeStyles({
    zooParty: {
        background: 'black'
    },
    image: {
        width: '100vw',
    }
});

export default function ZooParty(props) {
    const classes = useStyles();
    const image = {
        src: zooPartySrc,
        alt: 'Zoo Party',
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.zooParty}>
                <img className={classes.image}
                    src={image.src}
                    alt={image.alt} />
            </div>
        </React.Fragment>

    );
}