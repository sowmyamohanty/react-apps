import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Box,
  Divider,
} from '@mui/material';
import { Api, CheckCircle, Error as ErrorIcon, HourglassEmpty } from '@mui/icons-material';

// TypeScript types for activity
type ApiStatus = 'success' | 'failed' | 'pending';

interface RecentActivityItem {
  id: string;
  endpoint: string;
  status: ApiStatus;
  timestamp: string; // ISO string
}

// Helper to get icon and color for status
const getStatusIcon = (status: ApiStatus) => {
  switch (status) {
    case 'success':
      return <CheckCircle sx={{ color: 'success.main' }} />;
    case 'failed':
      return <ErrorIcon sx={{ color: 'error.main' }} />;
    case 'pending':
      return <HourglassEmpty sx={{ color: 'warning.main' }} />;
    default:
      return null;
  }
};

const getStatusLabel = (status: ApiStatus) => {
  switch (status) {
    case 'success':
      return <Chip label="Success" color="success" size="small" />;
    case 'failed':
      return <Chip label="Failed" color="error" size="small" />;
    case 'pending':
      return <Chip label="Pending" color="warning" size="small" />;
    default:
      return null;
  }
};

// Sample data
const sampleActivities: RecentActivityItem[] = [
  {
    id: '1',
    endpoint: '/api/users',
    status: 'success',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    endpoint: '/api/orders/123',
    status: 'failed',
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    endpoint: '/api/products',
    status: 'pending',
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    endpoint: '/api/auth/login',
    status: 'success',
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    endpoint: '/api/inventory/update',
    status: 'success',
    timestamp: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
  },
];

const formatTimestamp = (iso: string) => {
  try {
    const date = new Date(iso);
    return date.toLocaleString();
  } catch {
    return 'Invalid date';
  }
};

const RecentActivity: React.FC = () => {
  // In a real app, replace with data fetching logic
  const [activities, setActivities] = React.useState<RecentActivityItem[]>([]);

  React.useEffect(() => {
    // Simulate loading data
    setActivities(sampleActivities);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent API Activity
        </Typography>
        <List disablePadding>
          {activities.length === 0 ? (
            <Box sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
              <Typography variant="body2">No recent activity.</Typography>
            </Box>
          ) : (
            activities.map((activity, idx) => (
              <React.Fragment key={activity.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <Api />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 500, mr: 1 }}>
                          {activity.endpoint}
                        </Typography>
                        {getStatusIcon(activity.status)}
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {formatTimestamp(activity.timestamp)}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    {getStatusLabel(activity.status)}
                  </ListItemSecondaryAction>
                </ListItem>
                {idx < activities.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;