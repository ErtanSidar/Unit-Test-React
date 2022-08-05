import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter test",()=> {
    let increaseBtn, decreaseBtn, count;

    beforeAll(()=>{
        console.log("I will study once before tests");
    })

    afterAll(()=> {
        console.log("I will study once after tests");
    })

    beforeEach(()=>{
        console.log("I will study once before each test");
        render(<Counter></Counter>)
        count=screen.getByText("0")
        increaseBtn =screen.getByText("Increase");
        decreaseBtn=screen.getByText("Decrease");
    })

    afterEach(()=> {
        console.log("I will study once after each test");
    })
    test("increase btn", () => {
    
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    
    test("decrease btn", () => {

        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
})