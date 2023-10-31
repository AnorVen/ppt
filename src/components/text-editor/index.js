import { TEXT_FIELD_PROPS } from '@/app/constants';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const TextEditorWrapper = ({ label, textEditorValue, handleChangeText, height= 200 }) => {
	return (
		<>
			<h3>{label}</h3>
			<div style={{
				height: `${height}px`
			}}>
				<ReactQuill
					formats={TEXT_FIELD_PROPS.formats}
					modules={TEXT_FIELD_PROPS.modules}
					onChange={handleChangeText}
					defaultValue={textEditorValue}
				/>
			</div>

		</>

	);
};

export const TextEditor = TextEditorWrapper;
