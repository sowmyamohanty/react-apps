import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type Metric = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  description: string;
};

const metrics: Metric[] = [
  {
    label: 'Total API Calls',
    value: 128_450,
    icon: <BarChartIcon fontSize="large" />,
    color: '#1976d2',
    description: 'Number of API calls in the last 24 hours',
  },
  {
    label: 'Error Rate',
    value: '1.2%',
    icon: <ErrorOutlineIcon fontSize="large" />,
    color: '#d32f2f',
    description: 'Percentage of failed API calls',
  },
  {
    label: 'Avg. Response Time',
    value: '320ms',
    icon: <AccessTimeIcon fontSize="large" />,
    color: '#388e3c',
    description: 'Average API response time',
  },
];

const MetricsOverview: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <Grid container spacing={3}>
        {metrics.map((metric) => (
          <Grid item xs={12} sm={4} key={metric.label}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                boxShadow: 3,
                borderLeft: `6px solid ${metric.color}`,
                height: '100%',
              }}
              aria-label={metric.label}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  p: 2,
                  color: metric.color,
                }}
              >
                {metric.icon}
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {metric.label}
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                  {metric.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {metric.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MetricsOverview;