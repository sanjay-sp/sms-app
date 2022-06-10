import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SMSpage from '../Page/SMS Page/SMSpage';
import './Contact.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Contact = ({name, phone}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return <div>
        <div className='modal'>
    <Modal
      open={open}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          <div className='modal-header'>Contact Info</div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h4><span className='modal-title'>Name: </span>{name}</h4>
          <h4><span className='modal-title'>Phone Number: </span>{phone}</h4>
        </Typography>
        <Link to='sms' 
            state={{name:name, phone:phone}}>
            <button className='modal-button'>Send Message</button>
        </Link>
      </Box>
    </Modal>
  </div>

        <div className="contact" onClick={handleOpen}>{name}</div>
    </div> 
}

export default Contact;


