import { TEXT_FIELD_PROPS } from '@/app/constants';

import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuillBase = dynamic(
	async () => {
		const { default: RQ } = await import('react-quill');
		function QuillJS({ forwardedRef, ...props }) {
			return <RQ ref={forwardedRef} {...props}
			           formats={TEXT_FIELD_PROPS.formats}
			           modules={TEXT_FIELD_PROPS.modules}
			/>;
		}

		return QuillJS;
	},
	{
		ssr: false,
	},
);

export function TextEditor({ label, textEditorValue, handleChangeText, height = 200 }) {
	const quillRef = useRef(null);
	return (
		<>
			<h3>{label}</h3>
			<div style={{
				height: `${height}px`,
			}}>
				<ReactQuillBase forwardedRef={quillRef}
				                onChange={handleChangeText}
				                defaultValue={textEditorValue}
				/>
			</div>

		</>
	);
}
