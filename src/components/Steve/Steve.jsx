import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CssBaseline,
    IconButton,
    Typography,
} from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import bgImage from './graphics/png/Steve192.png';
import brisvegas from './graphics/jpg/brisvegas.jpg';

const styles = theme => ({
    steve: {
        height: '100vh',
        background: 'black'
    },
    card: {
        padding: theme.spacing()
    },
    media: {
        height: 140,
    },
});

class Steve extends Component {

    render() {
        const {
            classes
        } = this.props;
        let colors = this.props.colors;
        if (!colors) {
            colors = {
                primary: "#222",
                secondary: "#333",
            };
        }
        const muiTheme = {
            palette: {
                primary: {
                    main: colors.primary || "#222"
                },
                secondary: {
                    main: colors.secondary || "#333"
                }
            }
        };
        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <CssBaseline />
                <div className={cn(classes.steve)} >
                    <Card className={cn(classes.card)} >
                        <CardHeader
                            title={`Vestibulum efficitur`}
                            subheader={`maximus lacinia libero`}
                            avatar={<Avatar src={bgImage} alt={`Vestibulum`} />}
                            action={
                                <IconButton aria-label="Vestibulum">
                                    <MoreVertIcon color={`secondary`} />
                                </IconButton>
                            }
                        />
                        <CardMedia
                            className={classes.media}
                            image={brisvegas}
                            title="Vestibulum efficitur mi quam"
                        />
                        <CardContent>
                            <Typography variant={`body1`} className={cn(classes.title)}>
                                Vestibulum efficitur mi quam, maximus lacinia libero cursus id.
                                Cras sit amet metus ac ipsum porttitor dapibus ac sit amet mi.
                                Phasellus tristique volutpat mauris, quis accumsan elit mollis in.
                                Suspendisse malesuada semper tellus, eget sodales quam rutrum id.
                                Aliquam mattis tristique urna, eu mattis orci posuere quis.
                                Aliquam ullamcorper ipsum consectetur nisl ultricies,
                                ut auctor mauris volutpat.
                            </Typography>
                        </CardContent>

                        <CardActions>

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

                        </CardActions>
                        {/* 

                    

                     */}


                    </Card>
                </div>
            </MuiThemeProvider >
        );
    }
}

export default withStyles(styles, { withTheme: true })(Steve);
