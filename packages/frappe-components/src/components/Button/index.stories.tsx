import type { Meta, StoryObj } from "@storybook/react-vite/*";
import { Story, Variant } from "../Story";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ["solid", "subtle", "outline", "ghost"] as const;
const themes = ["gray", "blue", "green", "red"] as const;
const sizes = ["sm", "md", "lg", "xl", "2xl"] as const;

export const ButtonExample: Story = {
  render: (args) => (
    <Story layout={{ type: "grid", width: 300 }}>
      {variants.map((variant) => (
        <Variant key={variant} title={variant}>
          <div className="p-1">
            <Button variant={variant} {...args}>
              {args.label}
            </Button>
          </div>
        </Variant>
      ))}
    </Story>
  ),
  args: {
    theme: "gray",
    size: "sm",
    label: "Button",
    loading: false,
    disabled: false,
  },
  argTypes: {
    label: {
      control: "text",
      name: "Content",
    },
    disabled: {
      control: "boolean",
      name: "Disabled",
    },
    theme: {
      control: "select",
      options: themes,
      name: "Theme",
    },
    size: {
      control: "select",
      options: sizes,
      name: "Size",
    },
  },
  name: "Button",
};
