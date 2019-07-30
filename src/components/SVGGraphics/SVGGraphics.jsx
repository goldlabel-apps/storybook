import React, {Component} from 'react';
import styles from './SVGGraphics.Styles';
import { 
  animateClouds,
  animateBlokey 
} from './animation';
import './style.css';
import Steps from './Steps/Steps';
import {
  Box,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Switch,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class SVGGraphics extends Component {

  constructor(props){
    super(props);
    this.state = {
      elementToggle: true,
      cloudsMoving: false,
      overlayToggle: true,
    }
  }

  componentDidMount(){
    this.toggleOverlay();
  }

  toggleOverlay (){
    const {
      overlayToggle,
    } = this.state;
    if (overlayToggle){
      document.getElementById('overlay').classList.add('isHidden');
    }else{
      document.getElementById('overlay').classList.remove('isHidden');
    }
    this.setState({overlayToggle: !overlayToggle});
  }

  hideSteps (){
    document.getElementById('step2').classList.add('isHidden');
    document.getElementById('step-3').classList.add('isHidden');
  }  


  toggleElementCSS (){
    const {
      elementToggle,
    } = this.state;
    if (elementToggle){
      document.getElementById('blokey').classList.add('isHidden');
    }else{
      document.getElementById('blokey').classList.remove('isHidden');
    }
    this.setState({elementToggle: !elementToggle});
  }

  render(){
    const {
      styles: s,
      title,
      score,
      goal,
    } = this.props;
    const {
      readable,
    } = this.props.options.expires;

    const percentDone = Math.round((score/goal)*100);
    return (
      <React.Fragment>

        <div className="app">

          {/* <Box mt={65} mb={16}>
            <Grid columns={2}>
                <Column width={1}>
                  <Box {...s('asvgScreenTitle', 'asvgTitleText')}>
                  {`Example`}
                  </Box>
                </Column>
                <Column width={1}>
                  <Box {...s('asvgTitle', 'asvgTitleText', 'pullRight')}>
                    <DefaultButton
                      {...s('marginRight')}
                      light={true}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open ('https://github.com/rexlabsio/rex-app/pull/1303/files', '_blank');
                      }}>
                      Code
                    </DefaultButton>
                    <DefaultButton
                      light={true}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open ('https://docs.google.com/document/d/1ZHSnGzsZ6onpMOjTIKy0bZMGVVKmoIv6z9bZLILpC68/edit#heading=h.9g9apn2xfxg5', '_blank');
                      }}>
                      Doc
                    </DefaultButton>
                  </Box>
                </Column>
            </Grid>
          </Box> */}

          <div className={`graphic`}>
            <div className={`propLayer`} id="overlay">
              <Typography variant={`h5`}>
                {title}
              </Typography>
              <Typography variant={`h4`}>
                {percentDone}% ${goal}
              </Typography>
              <Typography variant={`h6`}>
                ends {readable}
              </Typography>
            </div>
            <div className={`svgLayer`}>
              <Steps />
            </div>
          </div>
          
          <Box>
          <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={`h4`}>CSS</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemIcon>
                    <Switch 
                      color={`primary`}
                      checked={this.state.elementToggle}
                      onClick={(e) => {
                        e.preventDefault();
                        this.toggleElementCSS();
                      }}
                    /> 
                  </ListItemIcon>
                  <div>
                    Hide/show an element with a CSS class 
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box mr={8}>
                      <Button
                        color={`primary`}
                        variant={`contained`}
                        onClick={(e) => {
                          e.preventDefault();
                          this.hideSteps();
                        }}> 
                        Hide Empty Steps
                      </Button>
                    </Box>
                  </ListItemIcon>
                  <div>
                    Remove the two empty steps 
                  </div>
                </ListItem>
              </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant={`h4`}>
                  Tweening
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box>
                  
                  <Button 
                    color={`primary`}
                    variant={`contained`}
                    onClick={(e) => {
                      e.preventDefault();
                      animateBlokey();
                    }}
                  >Animate Blokey</Button>
                  </Box>

                  <Box>
                    <Button 
                      color={`primary`}
                      variant={`contained`}
                      onClick={(e) => {
                        e.preventDefault();
                        animateClouds();
                      }}
                    >Animate clouds</Button>
                    </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant={`h4`}>Overlay</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemIcon>
                    <Switch 
                      color={`primary`}
                      checked={this.state.overlayToggle}
                      onClick={(e) => {
                        e.preventDefault();
                        this.toggleOverlay();
                      }}
                    /> 
                  </ListItemIcon>
                  <div>
                    Hide/show data overlay 
                  </div>
                </ListItem>
              </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}

export default SVGGraphics;
