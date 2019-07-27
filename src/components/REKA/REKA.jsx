import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  card: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'pink',
  },
}));

export default function REKA() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon color={`secondary`}/>
          </IconButton>
        }
        title="REKA"
        subheader="July 26, 2019"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Back in the day killer app was a term for an application which comes along at the right time
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon  color={`secondary`}/>
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon color={`secondary`}/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon color={`secondary`} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Paragraph 1</Typography>
          <Typography paragraph>
            Extra information about this
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}