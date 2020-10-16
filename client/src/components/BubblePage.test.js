import React from "react";
import { render, screen, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("bubbles", () => {
  render(<BubblePage />)
});

test("bubbles", async () => {
  const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  localStorage.setItem('token', token);
  const { getByText } = render(<BubblePage />)

  await wait (() => {
    getByText(/bisque/i);
  });
  const bubble = screen.getByText(/bisque/i);

  expect(bubble).toBeInTheDocument();

});
