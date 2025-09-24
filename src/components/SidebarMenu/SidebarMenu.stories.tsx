import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const sampleItems = [
  { label: "Home" },
  {
    label: "Services",
    children: [
      { label: "Web Development" },
      { label: "Mobile Apps" },
      { label: "UI/UX Design" },
    ],
  },
  {
    label: "About Us",
    children: [{ label: "Our Team" }, { label: "Careers" }],
  },
  { label: "Contact" },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};
