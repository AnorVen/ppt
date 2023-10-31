/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { NewsPhoto } from '.';

const props = {
	onDeleteFile: jest.fn(),
	input: {},
	onSetPhotoChange: jest.fn(),
};

describe('NewsPhoto', () => {
	it('should  render NewsPhoto', () => {
		render(<NewsPhoto {...props} />);
		expect(screen.queryByTestId('news-image-block')).toBeInTheDocument();
		expect(screen.queryByTestId('news-no-image')).toBeInTheDocument();
		expect(screen.queryByTestId('news-image-input')).toBeInTheDocument();
		expect(screen.queryByTestId('news-image')).not.toBeInTheDocument();
		expect(screen.queryByTestId('news__image--remove')).not.toBeInTheDocument();
	});
	it('should  render NewsPhoto with photo', () => {
		render(
			<NewsPhoto
				{...props}
				input={{
					value: 'value',
				}}
			/>,
		);
		expect(screen.queryByTestId('news-image-block')).toBeInTheDocument();
		expect(screen.queryByTestId('news-image')).toBeInTheDocument();
		expect(screen.queryByTestId('news-no-image')).not.toBeInTheDocument();
		expect(screen.queryByTestId('news-image-input')).toBeInTheDocument();
		expect(screen.queryByTestId('news__image--remove')).toBeInTheDocument();
	});
	it('should call onDeleteFile', async () => {
		render(
			<NewsPhoto
				{...props}
				input={{
					value: 'value',
				}}
			/>,
		);

		act(() => {
			userEvent.click(screen.queryByTestId('news__image--remove'));
		});
		await waitFor(() => {
			expect(props.onDeleteFile).toBeCalled();
		});
	});

	it('should call onSetPhotoChange', async () => {
		const file = new File(['test'], 'test.png', { type: 'image/png' });
		render(<NewsPhoto {...props} />);
		act(() => {
			userEvent.upload(document.querySelector('#input__file'), file);
		});
		await waitFor(() => {
			expect(props.onSetPhotoChange).toBeCalled();
		});
	});

	test('snapshot test NewsPhoto', async () => {
		const component = renderer.create(<NewsPhoto {...props} />).toJSON();
		expect(component).toMatchSnapshot();
	});
	test('snapshot test NewsPhoto with photo', async () => {
		const component = renderer
			.create(
				<NewsPhoto
					{...props}
					input={{
						value: 'value',
					}}
				/>,
			)
			.toJSON();

		expect(component).toMatchSnapshot();
	});
});
