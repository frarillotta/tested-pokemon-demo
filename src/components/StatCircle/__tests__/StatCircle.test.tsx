import { render } from "@testing-library/react";
import {StatCircle} from "../StatCircle";

describe("StatCircle", () => {
	
	describe("when loaded", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<StatCircle 
				color={"blue"}
				value={45}
			/>);
			expect(container).toMatchSnapshot();
		});

	});

})