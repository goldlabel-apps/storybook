import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fingerprint2 from "fingerprintjs2";
import {
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    userEntity: {},
}));

const getFingerPrint = () => {
    Fingerprint2.getPromise().then(function (components) {
        var values = components.map(function (component) { return component.value })
        var murmur = Fingerprint2.x64hash128(values.join(''), 31)
        console.log(murmur)
        return components
    })
}

export default function UserEntity(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.userEntity}>
                <Typography>
                    {JSON.stringify(getFingerPrint())}
                </Typography>
            </div>
        </React.Fragment>
    );
}
