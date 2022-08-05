import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo test",() => {
    let button, input;

    beforeEach(()=> {
        render(<Todo/>)
        button=screen.getByText("Add");
        input=screen.getByLabelText("Text");
    });

    test('should correct', () => {
        const items=screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    })

    test('should be input and button', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test('should be input value in list', () => {
        const name="Ertan";
        userEvent.type(input, name)

        userEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})