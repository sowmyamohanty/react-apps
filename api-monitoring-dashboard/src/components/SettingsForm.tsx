import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import { Brightness4, NotificationsActive } from '@mui/icons-material';

type ThemeOption = 'light' | 'dark' | 'system';

interface SettingsFormValues {
  theme: ThemeOption;
  notifications: boolean;
}

const themeOptions: { value: ThemeOption; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <Brightness4 /> },
  { value: 'dark', label: 'Dark', icon: <Brightness4 /> },
  { value: 'system', label: 'System Default', icon: <Brightness4 /> },
];

const SettingsForm: React.FC = () => {
  const [values, setValues] = useState<SettingsFormValues>({
    theme: 'system',
    notifications: true,
  });
  const [errors, setErrors] = useState<{ theme?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }> | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type } = event.target as HTMLInputElement;
    setValues((prev) => ({
      ...prev,
      [name!]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
    }));
  };

  const validate = () => {
    let tempErrors: typeof errors = {};
    if (!values.theme) {
      tempErrors.theme = 'Theme selection is required.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccess(true);
    } catch (err) {
      // Handle error if needed
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 420, mx: 'auto', p: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        User Settings
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <FormControl
          fullWidth
          margin="normal"
          error={Boolean(errors.theme)}
          variant="outlined"
          required
        >
          <InputLabel id="theme-label">Theme</InputLabel>
          <Select
            labelId="theme-label"
            id="theme"
            name="theme"
            value={values.theme}
            label="Theme"
            onChange={handleChange}
            startAdornment={themeOptions.find((opt) => opt.value === values.theme)?.icon}
          >
            {themeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {option.icon}
                  <Typography sx={{ ml: 1 }}>{option.label}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
          {errors.theme && <FormHelperText>{errors.theme}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <FormControlLabel
            control={
              <Switch
                checked={values.notifications}
                onChange={handleChange}
                name="notifications"
                color="primary"
                icon={<NotificationsActive />}
                checkedIcon={<NotificationsActive />}
              />
            }
            label="Enable notifications"
          />
        </FormControl>

        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitting}
            fullWidth
          >
            {submitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSuccess(false)}>
          Settings updated successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default SettingsForm;