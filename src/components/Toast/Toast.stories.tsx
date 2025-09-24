import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import styles from "./Toast.module.css";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  decorators: [
    (Story) => (
      <div className={styles.toastContainer}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const SuccessFade: Story = {
  args: {
    message: "Operation successful!",
    type: "success",
    duration: 3000,
    animation: "fade",
  },
};

export const ErrorSlide: Story = {
  args: {
    message: "Something went wrong!",
    type: "error",
    duration: 4000,
    animation: "slide",
  },
};

export const InfoFade: Story = {
  args: {
    message: "This is an info message",
    type: "info",
    duration: 2000,
    animation: "fade",
  },
};

export const WarningSlide: Story = {
  args: {
    message: "Be careful!",
    type: "warning",
    duration: 5000,
    animation: "slide",
  },
};
