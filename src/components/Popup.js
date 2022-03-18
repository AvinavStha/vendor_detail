import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent, DialogTitle } from '@material-ui/core';

export default function Popup(props) {

const {title, children, openPopup, setOpenPopup} = props; 

  return (
    <Dialog open={openPopup}>
        <DialogTitle>
            Employee Detail
        </DialogTitle>
        <DialogContent>
            Content goes here
        </DialogContent>
    </Dialog>
  )
}

