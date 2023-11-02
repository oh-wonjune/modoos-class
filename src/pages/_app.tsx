import { ReactElement, ComponentType } from 'react';
import '../styles/styles.css'

interface AppProps {
  Component: ComponentType;
  pageProps: Record<string, any>;
}

const App: React.FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return <Component {...pageProps} />;
}

export default App;
