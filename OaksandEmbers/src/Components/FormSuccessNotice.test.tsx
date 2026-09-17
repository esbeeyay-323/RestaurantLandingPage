// @vitest-environment jsdom

import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FormSuccessNotice } from "./FormSuccessNotice";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("FormSuccessNotice", () => {
  it("announces success and dismisses itself after five seconds", () => {
    vi.useFakeTimers();
    const onDismiss = vi.fn();

    render(
      <FormSuccessNotice
        title="Message submitted"
        message="Your form has been cleared."
        onDismiss={onDismiss}
      />,
    );

    const notice = screen.getByRole("status");
    expect(notice.textContent).toContain("Message submitted");
    expect(notice.textContent).toContain("Your form has been cleared.");

    act(() => vi.advanceTimersByTime(5000));

    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it("can be dismissed manually", () => {
    const onDismiss = vi.fn();

    render(
      <FormSuccessNotice
        title="Reservation request submitted"
        message="Your form has been cleared."
        onDismiss={onDismiss}
      />,
    );

    screen.getByRole("button", { name: "Dismiss notification" }).click();

    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
