import React from 'react';
import { Box, Typography } from '@mui/material';

const AppFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} API Monitoring Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
};

export default AppFooter;