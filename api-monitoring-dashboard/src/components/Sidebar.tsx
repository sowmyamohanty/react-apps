import React, { useState, useEffect } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  useTheme, 
  useMediaQuery,
  IconButton,
  Box,
  Tooltip
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

const navItems = [
  {
    name: 'Dashboard',
    route: '/',
    icon: <DashboardIcon />
  },
  {
    name: 'Settings',
    route: '/settings',
    icon: <SettingsIcon />
  }
];

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileToggle?: () => void;
  onWidthChange?: (width: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen = false, onMobileToggle, onWidthChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const currentDrawerWidth = collapsed ? collapsedDrawerWidth : drawerWidth;

  // Notify parent component about width changes
  useEffect(() => {
    if (onWidthChange && !isMobile) {
      onWidthChange(currentDrawerWidth);
    }
  }, [currentDrawerWidth, isMobile, onWidthChange]);

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Add proper top spacing for AppBar */}
      <Toolbar sx={{ minHeight: '64px' }} />

      {/* Collapse/Expand Button */}
      {!isMobile && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: collapsed ? 'center' : 'flex-end', 
          p: 1,
          borderBottom: `1px solid ${theme.palette.divider}`,
          mb: 1
        }}>
          <IconButton 
            onClick={handleToggleCollapse} 
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              }
            }}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      )}

      <List sx={{ flexGrow: 1, pt: 0 }}>
        {navItems.map((item) => (
          <Tooltip 
            key={item.name}
            title={collapsed ? item.name : ''}
            placement="right"
            disableHoverListener={!collapsed}
          >
            <ListItem
              button
              component={NavLink}
              to={item.route}
              selected={location.pathname === item.route}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? 'center' : 'initial',
                px: collapsed ? 1 : 2.5,
                mx: 1,
                borderRadius: 1,
                mb: 0.5,
                '&.active': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.contrastText,
                  },
                  '& .MuiListItemText-primary': {
                    color: theme.palette.primary.contrastText,
                    fontWeight: 600,
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  }
                },
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                transition: theme.transitions.create(['background-color', 'padding'], {
                  duration: theme.transitions.duration.short,
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 'auto' : 3,
                  justifyContent: 'center',
                  transition: theme.transitions.create('margin', {
                    duration: theme.transitions.duration.short,
                  }),
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.name} 
                sx={{ 
                  opacity: collapsed ? 0 : 1,
                  display: collapsed ? 'none' : 'block',
                  transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.short,
                  }),
                }} 
              />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ 
        width: { md: currentDrawerWidth }, 
        flexShrink: { md: 0 }
      }}
    >
      {/* Mobile drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onMobileToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              zIndex: theme.zIndex.drawer,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: currentDrawerWidth,
            marginTop: '65px',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
            zIndex: theme.zIndex.drawer,
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;