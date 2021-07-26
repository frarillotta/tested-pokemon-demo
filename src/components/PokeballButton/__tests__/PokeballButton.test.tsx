import { render } from "@testing-library/react";
import {PokeballButton} from "../PokeballButton";

describe("PokeballButton", () => {
	
	describe("when isCaptured=true", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<PokeballButton isCaptured={true} onClick={jest.fn()} />);
			expect(container.querySelector("[data-t-is-captured]").getAttribute("data-t-is-captured")).toBe("true");
			expect(container).toMatchSnapshot();
		});

	});

	describe("when isCaptured=false", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<PokeballButton isCaptured={false} onClick={jest.fn()}/>);
		
			expect(container.querySelector("[data-t-is-captured]").getAttribute("data-t-is-captured")).toBe("false");
			expect(container).toMatchSnapshot();
		})
	})
	
})