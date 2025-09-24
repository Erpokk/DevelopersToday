import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "Enter text" },
};

export const PasswordWithToggle: Story = {
  args: { type: "password", placeholder: "Enter password" },
};

export const ClearableText: Story = {
  args: { placeholder: "Clear me", clearable: true },
};

export const NumberInput: Story = {
  args: { type: "number", placeholder: "Enter number" },
};
