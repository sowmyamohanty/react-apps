import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#424242',
      light: '#6D6D6D',
      dark: '#1B1B1B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5E35B1',
      light: '#9162E4',
      dark: '#280680',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    background: {
      default: '#F0F8FF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#BDBDBD',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#1B1B1B',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#1B1B1B',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#1B1B1B',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#424242',
          color: '#FFFFFF',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: 8,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F5F5F5',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 5px rgba(66, 66, 66, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(66, 66, 66, 0.08)',
          border: '1px solid #E0E0E0',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0F8FF',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          color: '#424242',
          fontSize: '1rem',
        },
        body: {
          fontSize: '0.95rem',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: '#EDE7F6',
            color: '#5E35B1',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#424242',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: '#FAFAFA',
        },
        input: {
          padding: '10px 12px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#424242',
          color: '#FFFFFF',
          fontSize: '0.95rem',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#5E35B1',
        },
      },
    },
  },
});

export default theme;