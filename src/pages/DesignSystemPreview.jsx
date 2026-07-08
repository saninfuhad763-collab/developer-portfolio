import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/common/SectionHeading';
import { ThemeSwitcher } from '../components/ui/ThemeSwitcher';

export const DesignSystemPreview = () => {
  return (
    <div className="min-h-screen">
      <Section variant="default" spacing="default">
        <Container>
          <SectionHeading
            eyebrow="Design System"
            title="Design System Foundation"
            description="A comprehensive, reusable design system built for a production-quality developer portfolio. Modern SaaS aesthetics with selective glassmorphism."
          />
          
          <div className="mt-12 flex flex-col gap-8">
            <div className="bg-surface border border-border p-6 rounded-xl shadow-sm">
              <h3 className="text-h3 mb-4">Buttons</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" isLoading>Loading</Button>
              </div>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl shadow-sm">
              <h3 className="text-h3 mb-4">Badges</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl shadow-sm">
              <h3 className="text-h3 mb-4">Theme</h3>
              <ThemeSwitcher />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
