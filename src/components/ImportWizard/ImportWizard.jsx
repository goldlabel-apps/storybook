import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import VerticalLinearStepper from './components/VerticalLinearStepper';

//import SelectImportType from './components/SelectImportType';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function ImportWizard() {
  const [
    open, 
    setOpen
  ] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleClickOpen}
      >
        HM Land Registry
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Sales Import History
        </DialogTitle>
        <DialogContent>
          
          <VerticalLinearStepper />

        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose} 
            variant={`outlined`}
            color={`primary`}
          >
            Cancel
          </Button>
          <Button
            disabled
            variant={`contained`}
            onClick={handleClose} 
            color={`primary`}
          >
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}