import { createTheme } from '@material-ui/core/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
  },
});

export { lightTheme, darkTheme };
