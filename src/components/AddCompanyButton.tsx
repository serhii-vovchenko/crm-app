'use client';

import React, { useState } from 'react';
import Button from './Button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'));

export interface AddCompanyButtonProps {}

const AddCompanyButton = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<Button onClick={() => setShow(true)} text="Add Company" />
			<CompanyFormModal onSubmit={console.log} show={show} onClose={() => setShow(false)} />
		</>
	);
};

export default AddCompanyButton;
