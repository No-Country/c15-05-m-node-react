import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const ButtonBack = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); 
    };

  return (
    <Button variant="text"  startIcon={<ArrowBackIcon />} onClick={handleGoBack}            
    sx={{
        '&:hover': {
            backgroundColor: 'transparent',
            border: '1px solid',
        },
    }}>
      Volver
    </Button>
  );
};

export default ButtonBack;