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
    <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={handleGoBack}>
      Volver
    </Button>
  );
};

export default ButtonBack;