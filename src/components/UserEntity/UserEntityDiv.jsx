import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { createFingerprint } from './redux/userEntity/actions'; 
import {
    Typography,
} from '@material-ui/core/';


const useStyles = makeStyles(theme => ({
    userEntity: {},
}));

export default function UserEntityDiv(props) {
    const classes = useStyles();
    const { fingerprint } = useSelector(state => state.userEntity)
    if (!fingerprint) {
        createFingerprint()
    }
    // console.log(fingerprint)
    return (
        <React.Fragment>
            <Typography>
                Fingerprint: {fingerprint}
            </Typography>
        </React.Fragment>
    );
}
