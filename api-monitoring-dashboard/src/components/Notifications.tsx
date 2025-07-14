import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  Box,
  Divider,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

type AlertType = 'info' | 'warning' | 'error';

interface Notification {
  id: string;
  title: string;
  description: string;
  type: AlertType;
  timestamp: string;
}

const alertIcon = (type: AlertType) => {
  switch (type) {
    case 'warning':
      return (
        <Avatar sx={{ bgcolor: 'warning.main' }}>
          <WarningAmberIcon />
        </Avatar>
      );
    case 'error':
      return (
        <Avatar sx={{ bgcolor: 'error.main' }}>
          <ErrorIcon />
        </Avatar>
      );
    case 'info':
    default:
      return (
        <Avatar sx={{ bgcolor: 'info.main' }}>
          <InfoIcon />
        </Avatar>
      );
  }
};

const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'Server Restarted',
    description: 'The main server was restarted at 10:32 AM.',
    type: 'info',
    timestamp: '2024-06-12T10:32:00Z',
  },
  {
    id: '2',
    title: 'High Memory Usage',
    description: 'Memory usage exceeded 90% on node-3.',
    type: 'warning',
    timestamp: '2024-06-12T09:50:00Z',
  },
  {
    id: '3',
    title: 'Failed Login Attempt',
    description: 'There was a failed login attempt from IP 192.168.1.45.',
    type: 'error',
    timestamp: '2024-06-12T08:12:00Z',
  },
  {
    id: '4',
    title: 'Backup Completed',
    description: 'Nightly backup completed successfully.',
    type: 'info',
    timestamp: '2024-06-12T07:00:00Z',
  },
];

const formatTimestamp = (timestamp: string) => {
  try {
    const date = new Date(timestamp);
    return date.toLocaleString();
  } catch {
    return '';
  }
};

const Notifications: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <NotificationsIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="h6" component="div">
          Recent Alerts
        </Typography>
      </Box>
      <List>
        {sampleNotifications.length === 0 ? (
          <Typography variant="body2" color="text.secondary" align="center">
            No notifications to display.
          </Typography>
        ) : (
          sampleNotifications.map((notification, idx) => (
            <React.Fragment key={notification.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>{alertIcon(notification.type)}</ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: notification.type === 'error' ? 700 : 500,
                        color:
                          notification.type === 'error'
                            ? 'error.main'
                            : notification.type === 'warning'
                            ? 'warning.main'
                            : 'text.primary',
                      }}
                    >
                      {notification.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="span"
                      >
                        {notification.description}
                      </Typography>
                      <Box component="span" sx={{ display: 'block', mt: 0.5 }}>
                        <Typography
                          variant="caption"
                          color="text.disabled"
                          component="span"
                        >
                          {formatTimestamp(notification.timestamp)}
                        </Typography>
                      </Box>
                    </>
                  }
                />
              </ListItem>
              {idx < sampleNotifications.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))
        )}
      </List>
    </Paper>
  );
};

export default Notifications;