import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import IconPrivacy from '@material-ui/icons/Accessibility';
import IconHome from '@material-ui/icons/Home';
import IconGo from '@material-ui/icons/PlayCircleOutline';
import IconSettings from '@material-ui/icons/Settings';
import IconSocial from '@material-ui/icons/PlayCircleOutline';
import IconReset from '@material-ui/icons/Refresh';
import IconDocs from '@material-ui/icons/FileCopy';
import IconApi from '@material-ui/icons/PhonelinkSetup';
import IconBack from '@material-ui/icons/ArrowBack';

import {
    ClockSVG,
    InvaderSVG,
    StorybookSVG,
    WordPressSVG,
    GithubSVG,
} from '../svg-graphics';


const styles = theme => ({
    navIcon: {
        width: 24,
        height: 24,
    },
    homeIcon: {
        marginRight: theme.spacing(),
    },
    card: {
        color: '#126970',
        marginBottom: theme.spacing(2),
    },
    white: {
        color: 'white',
    }
});

class Icon extends Component {

    render() {
        const {
            classes,
            icon,
        } = this.props;

        switch (icon) {

            case `home`:
                return (<IconHome className={cn(classes.white)} />);

            case `chuckens`:
                return (<IconSettings className={classes.white} />);

            case `docs`:
                return (<IconDocs className={classes.white} />);

            case `reset`:
                return (<IconReset className={classes.white} />);

            case `go`:
                return (<IconGo className={classes.white} />);

            case `settings`:
                return (<IconSettings className={classes.white} />);

            case `social`:
                return (<IconSocial className={classes.white} />);

            case `clock`:
                return <ClockSVG className={classes.navIcon} />;

            case `storybook`:
                return (<StorybookSVG className={classes.navIcon} />);

            case `github`:
                return (<GithubSVG className={classes.navIcon} />);

            case `wordpress`:
                return (<WordPressSVG className={classes.navIcon} color={`#ffffff`} />);

            case `back`:
                return (<IconBack className={classes.white} />);



            case `privacy`:
                return (<IconPrivacy className={classes.white} />);

            case `api`:
                return (<IconApi className={classes.white} />);

            case `koji`:
                return (<InvaderSVG className={classes.navIcon} color={`#126970`} />);

            default: {
                return null;
            }
        }
    }
}

const mapStateToProps = (store) => {
    return {
        // store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles, { withTheme: true })(Icon))
);
