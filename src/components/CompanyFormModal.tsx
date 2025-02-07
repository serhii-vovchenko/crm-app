'use client';
import React from 'react';
import CompanyForm, { CompanyFormProps } from './CompanyForm';
import Modal, { ModalProps } from './Modal';
export interface CompanyFormModalProps extends ModalProps {
	onSubmit: CompanyFormProps['onSubmit'];
}
export default function CompanyFormModal({ onSubmit, ...rest }: CompanyFormModalProps) {
	return (
		<Modal {...rest}>
			<CompanyForm onSubmit={onSubmit} />
		</Modal>
	);
}
