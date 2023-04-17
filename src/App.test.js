import React from "react";
import { render as domRender, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import TodoList from "./components/TodoList";
import ReactDOM from 'react-dom/client';
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders the landing page of the app', () => {
    act(() => { render(<App />, container); });

});
test('the landing page should have the heading "What´s the plan for today?"', () => {
    expect(screen.findByText("What's the plan for today?")).toBeTruthy()

});
test('should only have one form wiht className "test-form"', () => {
    const { container } = render(<App />)
    const boxes = container.getElementsByClassName('todo-form')
    expect(boxes.length).toBe(1);
});
