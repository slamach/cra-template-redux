import { ThemeProvider } from 'styled-components';
import { theme } from './AppStyles';
import { GlobalStyle } from './AppStyles';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>
        This is React App Boilerplate by{' '}
        <a href="https://dmitrysviridov.ru">Dmitry Sviridov</a>
      </p>
    </ThemeProvider>
  );
};

export default App;
