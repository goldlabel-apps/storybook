import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import bgImage from './graphics/brisvegas.jpg';

import CurlyBrace from './graphics/jsx/CurlyBrace';
import BlueC from './graphics/jsx/BlueC';
import BlueD from './graphics/jsx/BlueD';
import BlueE from './graphics/jsx/BlueE';
import BlueO from './graphics/jsx/BlueO';
import WhiteO from './graphics/jsx/WhiteO';
import WhiteR from './graphics/jsx/WhiteR';
import WhiteW from './graphics/jsx/WhiteW';
import WhiteX from './graphics/jsx/WhiteX';

// import { animate } from './animation';

const offsets = {
    left: 0,
    top: 0
};

const image = {
    src: bgImage,
    alt: 'Brisvegas',
};

const styles = theme => ({
    stage: {
        position: 'relative',
        height: '100vh',
        background: 'black',
    },
    graphics: {
        position: 'absolute',
    },
    image: {
        width: '100vw',
        height: 'calc(100vh - 5px)',
    }
});

class ChuckenAnimation extends Component {

    componentDidMount() {
        const { baseDuration } = this.props.animation;
        this.setAnimationSpeed(baseDuration);
        // setTimeout(() => { animate(`curly-brace`, `start`, this.curlyBraceComplete) }, 1000);
    }

    componentDidUpdate() {
        const { baseDuration } = this.props.animation;
        this.setAnimationSpeed(baseDuration);
    }

    setAnimationSpeed = (baseDuration) => {
        console.log('setAnimationSpeed', baseDuration);
    }

    curlyBraceComplete = (e) => {
        console.log('curlyBraceComplete')
    }

    render() {
        const {
            classes,
        } = this.props;


        return (
            <React.Fragment>
                <CssBaseline />
                <div className={cn(classes.stage)}>
                    <div className={cn(classes.graphics)}>
                        <img className={classes.image}
                            src={image.src}
                            alt={image.alt} />
                    </div>
                    {/* <CurlyBrace
                        id={`curly-brace`}
                        style={{
                            position: `absolute`,
                            height: 86,
                            opacity: '0',
                        }} />

                    <BlueC
                        id={`blue-c`}
                        style={{
                            position: `absolute`,
                            height: 41,
                            left: offsets.left,
                            top: 14 + offsets.top,
                        }} />
                    <BlueO
                        id={`blue-o`}
                        style={{
                            position: `absolute`,
                            left: 41 + offsets.left,
                            height: 41,
                            top: 14 + offsets.top,
                        }} />

                    <BlueD
                        id={`blue-d`}
                        style={{
                            position: `absolute`,
                            left: 84 + offsets.left,
                            height: 56,
                            top: offsets.top,
                        }} />

                    <BlueE
                        id={`blue-e`}
                        style={{
                            position: `absolute`,
                            left: 128 + offsets.left,
                            height: 41,
                            top: 14 + offsets.top,
                        }} />

                    <WhiteW
                        id={`white-w`}
                        style={{
                            position: `absolute`,
                            left: 167 + offsets.left,
                            height: 40,
                            top: 15 + offsets.top,
                        }} />

                    <WhiteO
                        id={`white-o`}
                        style={{
                            position: `absolute`,
                            left: 225 + offsets.left,
                            height: 41,
                            top: 15 + offsets.top,
                        }} />

                    <WhiteR
                        id={`white-r`}
                        style={{
                            position: `absolute`,
                            left: 270 + offsets.left,
                            height: 40,
                            top: 15 + offsets.top,
                        }} />

                    <WhiteX
                        id={`white-r`}
                        style={{
                            position: `absolute`,
                            left: 292 + offsets.left,
                            height: 40,
                            top: 15 + offsets.top,
                        }} /> */}
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ChuckenAnimation);
