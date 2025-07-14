import React from 'react';
import { Grid, Box } from '@mui/material';
import MetricsOverview from '@components/MetricsOverview';
import APIStatistics from '@components/APIStatistics';
import ResponseStatusChart from '@components/ResponseStatusChart';
import RecentActivity from '@components/RecentActivity';
import Notifications from '@components/Notifications';

const DashboardPage: React.FC = () => {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Row 1: Metrics Overview (Full Width) */}
        <Grid item size={12}>
          <MetricsOverview />
        </Grid>

        {/* Row 2: Charts (Two Columns) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <APIStatistics />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <ResponseStatusChart />
        </Grid>

        {/* Row 3: Activity & Notifications (Two Columns) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <RecentActivity />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Notifications />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;