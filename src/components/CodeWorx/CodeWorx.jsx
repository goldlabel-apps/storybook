import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import CurlyBrace from './graphics/jsx/CurlyBrace';
import BlueC from './graphics/jsx/BlueC';
import BlueD from './graphics/jsx/BlueD';
import BlueE from './graphics/jsx/BlueE';
import BlueO from './graphics/jsx/BlueO';
import WhiteO from './graphics/jsx/WhiteO';
import WhiteR from './graphics/jsx/WhiteR';
import WhiteW from './graphics/jsx/WhiteW';
import WhiteX from './graphics/jsx/WhiteX';
import { animate } from './animation';
import bgImage from './graphics/brisvegas.jpg';

const styles = theme => ({
    stage: {
        position: 'relative',
        height: '100vh',
        background: 'black',
        overflow: 'hidden',
    },
    logo: {
        position: 'absolute',
        width: 380,
        height: 86,
        left: 'calc(50vw - 190px)',
        top: 'calc(50vh - 43px)',

    },
    image: {
        width: '100%',
    }
});

const offsets = {
    top: 9,
    left: 0,

};
const image = {
    src: bgImage,
    alt: 'Brisvegas',
};

class CodeWorx extends Component {

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        animate(`cursor`, `startAnimation`, 0.5, null);
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={cn(classes.stage)}>
                    <div className={cn(classes.logo)} >
                        <BlueC
                            id={`blue-c`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                xIndex: 360,
                                position: `absolute`,
                                opacity: '0',
                                height: 41,
                                left: offsets.left,
                                top: 14 + offsets.top,
                            }} />

                        <BlueO
                            id={`blue-o`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                zIndex: 380,
                                position: `absolute`,
                                opacity: '0',
                                left: 41 + offsets.left,
                                height: 41,
                                top: 14 + offsets.top,
                            }} />

                        <BlueD
                            id={`blue-d`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                zIndex: 400,
                                position: `absolute`,
                                opacity: '0',
                                left: 84 + offsets.left,
                                height: 56,
                                top: offsets.top,
                            }} />

                        <BlueE
                            id={`blue-e`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                zIndex: 420,
                                position: `absolute`,
                                opacity: '0',
                                left: 128 + offsets.left,
                                height: 41,
                                top: 14 + offsets.top,
                            }} />

                        <WhiteW
                            id={`white-w`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 440,
                                position: `absolute`,
                                opacity: '0',
                                left: 167 + offsets.left,
                                height: 40,
                                top: 15 + offsets.top,
                            }} />

                        <WhiteO
                            id={`white-o`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 460,
                                position: `absolute`,
                                opacity: '0',
                                left: 225 + offsets.left,
                                height: 41,
                                top: 15 + offsets.top,
                            }} />

                        <WhiteR
                            id={`white-r`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 480,
                                position: `absolute`,
                                opacity: '0',
                                left: 270 + offsets.left,
                                height: 40,
                                top: 15 + offsets.top,
                            }} />

                        <WhiteX
                            id={`white-x`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 500,
                                position: `absolute`,
                                opacity: '0',
                                left: 292 + offsets.left,
                                height: 40,
                                top: 15 + offsets.top,
                            }} />



                        <CurlyBrace
                            id={`cursor`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 999,
                                position: `absolute`,
                                height: 86,
                                opacity: '0',
                            }} />
                    </div>
                    <img className={classes.image}
                        src={image.src}
                        alt={image.alt} />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CodeWorx);
