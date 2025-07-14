import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import SettingsForm from '@components/SettingsForm';

const SettingsPage: React.FC = () => {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Row 1: Page Title - Full Width */}
        <Grid item size={12}>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
        </Grid>

        {/* Row 2: Settings Form - Full Width */}
        <Grid item size={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <SettingsForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsPage;
