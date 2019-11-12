import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Button,
    Container,
    CssBaseline,
    Typography,
} from '@material-ui/core/';

const styles = theme => ({
    mui: {
        border: '1px solid #ccc',
        height: '100vh',
        paddingTop: theme.spacing()
    },
    title: {
        padding: theme.spacing()
    },
    btn: {
        margin: theme.spacing()
    }
});

class MaterialUI extends Component {

    render() {
        const {
            classes,
        } = this.props;
        let colors = this.props.colors;
        if (!colors) {
            colors = {
                primary: "#222",
                secondary: "#11b0b9",
            };
        }
        const muiTheme = {
            palette: {
                primary: {
                    main: colors.primary
                },
                secondary: {
                    main: colors.secondary
                }
            }
        };
        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <CssBaseline />
                <div className={cn(classes.mui)}>
                    <Container>
                        <Typography variant={`h5`} className={cn(classes.title)}>
                            Material UI
                        </Typography>

                        <Typography variant={`body1`}>
                            New to Material-UI? It's easy to learn if you know where to start! This guide will help you to get started quickly.
                        </Typography>

                        <Typography variant={`h6`} className={cn(classes.title)}>
                            Buttons
                        </Typography>


                        <Button
                            className={cn(classes.btn)}
                            color={`primary`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://material-ui.com/getting-started/installation/', '_blank')
                            }}>
                            Material UI Docs
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`secondary`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://material.io/resources/icons/', '_blank')
                            }}>
                            Material Icons
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`default`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Contained
                        </Button>

                        <Button
                            className={cn(classes.btn)}
                            color={`primary`}
                            variant={`outlined`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://material-ui.com/getting-started/installation/', '_blank')
                            }}>
                            Outlined Primary
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`secondary`}
                            variant={`outlined`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Outlined Secondary
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`default`}
                            variant={`outlined`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Outlined Default
                        </Button>
                    </Container>
                </div>
            </MuiThemeProvider >
        );
    }
}

export default withStyles(styles, { withTheme: true })(MaterialUI);
