import {
    Grid,
    Typography
} from '@material-ui/core/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';

import cn from 'classnames';
import theme from '../style/theme';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
    container: {
        margin: 'auto',
        maxWidth: 800,
    }
});

class WhatIsStorybook extends Component {

    componentDidMount(){
        window.document.title = `title`;
    }

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div className={cn(classes.container)}>
                    <React.Fragment>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Typography variant={`h5`}>
                                    What is Storybook?
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Typography variant={`body2`}>
                                    Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant={`body2`}>
                                    Think of storybook as the construct. Like in the Matrix. The construct is a playground we control. We can use any dependencies, we can code as badly or as well as we want too. Even hit stuff with big hammers to see what happens is ok because it's not going to impact anything important.
                                </Typography>
                            </Grid>
                            
                        </Grid>
                    </React.Fragment>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(WhatIsStorybook);
