import { render } from "@testing-library/react";
import {FilterButtons} from "../FilterButtons";

describe("FilterButtons", () => {
	
	describe("when the filter is captured", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<FilterButtons filter={"captured"} setFilter={jest.fn()}/>)
			expect(container).toMatchSnapshot();
		});

	});

	describe("when the filter is not-captured", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<FilterButtons filter={"not-captured"} setFilter={jest.fn()}/>)
			expect(container).toMatchSnapshot();
		})
	})
	
})