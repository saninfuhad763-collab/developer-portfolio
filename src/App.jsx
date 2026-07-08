import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import { Container } from './components/layout/Container';
import { Section } from './components/layout/Section';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-4 py-2 mt-4 bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
      style={{ backgroundColor: 'var(--color-primary)' }} // Using the placeholder token
    >
      Toggle Theme (Current: {theme})
    </button>
  );
};

function AppContent() {
  return (
    <div className="min-h-screen">
      <Section>
        <Container>
          <h1 className="text-3xl font-bold">Portfolio Foundation</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Tailwind CSS, ThemeProvider, Container, and Section components are configured.
          </p>
          <ThemeToggle />
        </Container>
      </Section>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;