import * as Tabs from '@radix-ui/react-tabs';
import './Tabs.css';

export default () => (
  <Tabs.Root>
    <Tabs.List className="TabsList" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
            Tab 1
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
            Tab 2
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab3">
            Tab 3
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab4">
            Tab 4
        </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content />
  </Tabs.Root>
);