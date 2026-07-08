import { ThemeProvider } from './theme/ThemeProvider';
import { DesignSystemPreview } from './pages/DesignSystemPreview';

function App() {
  return (
    <ThemeProvider>
      <DesignSystemPreview />
    </ThemeProvider>
  );
}

export default App;