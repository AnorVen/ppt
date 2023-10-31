/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { TextEditorWrapper } from '.';
import { TEXT_FIELD_PROPS } from '../../constants';

const mockReactQuillComponent = jest.fn();

jest.mock('react-quill', () => ({
	__esModule: true,
	default: props => {
		mockReactQuillComponent(props);
		return (
			<div data-testid="react-quill" onClick={props.onChange}>
				{props.value}
			</div>
		);
	},
}));

jest.mock('../../constants', () => ({
	TEXT_FIELD_PROPS: {
		formats: [
			'header',
			'bold',
			'italic',
			'underline',
			'strike',
			'blockquote',
			'list',
			'bullet',
			'indent',
			'link',
			'image',
			'align',
		],
		modules: {
			toolbar: [
				[{ header: [1, 2, false] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
				[{ align: [] }],
				['link'],
				['clean'],
			],
		},
	},
}));

const props = {
	onSetMainTextValue: jest.fn(),
	mainTextValue: 'components',
};

describe('TextEditorWrapper', () => {
	it('should  render TextEditorWrapper', () => {
		render(<TextEditorWrapper {...props} />);
		expect(screen.queryByTestId('react-quill')).toBeInTheDocument();
		expect(mockReactQuillComponent).toBeCalledWith({
			formats: TEXT_FIELD_PROPS.formats,
			modules: TEXT_FIELD_PROPS.modules,
			onChange: expect.any(Function),
			value: props.mainTextValue,
		});
	});

	it('should call onSetMainTextValue', async () => {
		render(<TextEditorWrapper {...props} />);

		act(() => {
			userEvent.click(screen.queryByTestId('react-quill'));
		});
		await waitFor(() => {
			expect(props.onSetMainTextValue).toBeCalled();
		});
	});

	test('snapshot test TextEditorWrapper', async () => {
		const component = renderer.create(<TextEditorWrapper {...props} />).toJSON();
		expect(component).toMatchSnapshot();
	});
});
