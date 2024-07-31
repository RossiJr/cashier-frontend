import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1d2634', // --color-main-background
      paper: '#263043', // --color-secondary-background
    },
    primary: {
      main: '#ffffff', // --color-text-primary
    },
    secondary: {
      main: '#9e9ea4', // --color-text-secondary
    },
    text: {
      primary: '#ffffff', // --color-text-primary
      secondary: '#9e9ea4', // --color-text-secondary
    },
    divider: '#444', // --color-border
  },
  typography: {
    fontFamily: '"Gill Sans", sans-serif', // --font-family-title
    h1: {
      color: '#e6e6e6', // --color-title-darkmode
    },
    h2: {
      color: '#e6e6e6', // --color-title-darkmode
    },
    h3: {
      color: '#e6e6e6', // --color-title-darkmode
    },
    h4: {
      color: '#e6e6e6', // --color-title-darkmode
    },
    h5: {
      color: '#e6e6e6', // --color-title-darkmode
    },
    h6: {
      color: '#e6e6e6', // --color-title-darkmode
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#888', // --color-accent
          '&:hover': {
            backgroundColor: '#555', // --color-accent-hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#1d2634', // --color-main-background
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#263043', // --color-secondary-background
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: '#3a4859', // --color-lighter-background
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #444', // --color-border
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'red', // --color-close-icon
        },
      },
    },
  },
});

export default theme;
