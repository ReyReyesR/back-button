import React from 'react'
import { render } from "@testing-library/react";
import StaticCard from "../../../components/static/StaticCard";

const dummyContent = 'example';

describe("staticCard", () => {
    it("renders without crashing", () => {
        const { container, getByText } = render(<StaticCard content={dummyContent} />);
        expect(getByText(dummyContent)).toBeInTheDocument();
        const todoList = container.querySelector('.static__content');
        expect(todoList).not.toBe(null);
    });
});