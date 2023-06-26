import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const FileUploader = ({ onFileUploadedChange, links, onUploadedFileDelete, isOnlyOneFileToUpload = false }) => {
	return (
		<>
			<div className="file-uploader">
				<div className="file-uploader__wrapper">
					<div className="file-uploader__file">
						{!(isOnlyOneFileToUpload && links.length === 1) && (
							<Input onChange={onFileUploadedChange} type="file" id="input__file" />
						)}
						<div
							className={`file-uploader__icon-wrapper ${
								isOnlyOneFileToUpload && links.length === 1
									? 'file-uploader__icon-wrapper_disabled'
									: ''
							}`}
						>
							<Icon className="file-uploader__icon" name="plus" />
						</div>
					</div>
				</div>
			</div>

			{links?.map(({ link, name, key }) => (
				<div className="file-uploader" key={key}>
					<div className="file-uploader__wrapper">
						<div className="file-uploader__file">
							<Icon size="large" name="file outline" />
							{onUploadedFileDelete && (
								<div className="file-uploader__delete-icon-wrapper" onClick={onUploadedFileDelete}>
									<Icon className="file-uploader__delete-icon" size="small" name="delete" />
								</div>
							)}
						</div>
						<a className="file-uploader__link" href={link} target="_blank" rel="noreferrer">
							{name}
						</a>
					</div>
				</div>
			))}
		</>
	);
};

FileUploader.propTypes = {
	onFileUploadedChange: PropTypes.func,
	onUploadedFileDelete: PropTypes.func,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			key: PropTypes.string.isRequired,
		}),
	),
	isOnlyOneFileToUpload: PropTypes.bool.isRequired,
};

export { FileUploader };
