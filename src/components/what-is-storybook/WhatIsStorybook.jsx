import {
    Grid,
    Typography
} from '@material-ui/core/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';

import cn from 'classnames';
import theme from '../../style/theme';
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
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant={`h5`}>
                                    What is Storybook?
                                </Typography>
                            </Grid>

                            
                            <Grid item xs={8}>
                                <Typography variant={`body2`}>
                                
                                    Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.
                                    </Typography>

                                    <Typography variant={`h6`}>
                                        Build bulletproof UI components faster
                                    </Typography>

                                    <Typography variant={`body2`}>
                                    Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.
                                    Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.
                                </Typography>

                            </Grid>

                            <Grid item xs={4}>
                                
                            </Grid>
                            
                        </Grid>
                    </React.Fragment>
                    </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(WhatIsStorybook);
