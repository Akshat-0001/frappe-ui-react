import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "./index";
import { Story, Variant } from "../Story";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  tags: ["autodocs"],
  component: Combobox,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Combobox>;

const simpleOptions = [
  "John Doe",
  "Jane Doe",
  "John Smith",
  "Jane Smith",
  "John Wayne",
];

const objectOptions = [
  { label: "Dashboard", value: "dashboard", icon: <span>📊</span> },
  { label: "Projects", value: "projects", icon: <span>📁</span> },
  { label: "Tasks", value: "tasks", icon: <span>✅</span> },
  {
    label: "Settings",
    value: "settings",
    icon: <span>⚙️</span>,
    disabled: true,
  },
];

const groupedOptions = [
  {
    group: "Fruits",
    options: [
      { label: "Apple", value: "apple", icon: <span>🍎</span> },
      { label: "Banana", value: "banana", icon: <span>🍌</span> },
    ],
  },
  {
    group: "Vegetables",
    options: [
      { label: "Carrot", value: "carrot", icon: <span>🥕</span> },
      { label: "Broccoli", value: "broccoli", icon: <span>🥦</span> },
    ],
  },
];

export const Simple: Story = {
  args: {
    options: simpleOptions,
    value: "",
    placeholder: "Select a person",
    onChange: () => {},
  },
  render: (args) => (
    <Story layout={{ type: "grid", width: 700 }}>
      <Variant title="Simple options" flexAlign="start" minHeight={200}>
        <Combobox {...args} />
      </Variant>
    </Story>
  ),
};

export const WithIcons: Story = {
  args: {
    options: objectOptions,
    value: "",
    placeholder: "Select an item",
    onChange: () => {},
  },
  render: (args) => (
    <Story layout={{ type: "grid", width: 700 }}>
      <Variant title="Options with icons" flexAlign="start" minHeight={200}>
        <Combobox {...args} />
      </Variant>
    </Story>
  ),
};

export const Grouped: Story = {
  args: {
    options: groupedOptions,
    value: "",
    placeholder: "Select a food",
    onChange: () => {},
  },
  render: (args) => (
    <Story layout={{ type: "grid", width: 700 }}>
      <Variant title="Grouped options" flexAlign="start" minHeight={200}>
        <Combobox {...args} />
      </Variant>
    </Story>
  ),
};
