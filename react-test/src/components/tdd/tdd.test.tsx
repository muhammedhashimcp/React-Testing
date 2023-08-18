import { render, screen } from "@testing-library/react";
import { Tdd } from "./tdd";


test('Greet renders correctly', () => {
	render(<Tdd />);
	const textElement = screen.getByText('Hello');
	expect(textElement).toBeInTheDocument();
});
test('Greet renders with a name', () => {
	render(<Tdd name='hashim' />)

	const textElement = screen.getByText('Hello hashim')
	expect(textElement).toBeInTheDocument()
})