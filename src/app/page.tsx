import AddCompanyButton from '@/components/AddCompanyButton';
import StatusLabel, { Status } from '@/components/StatusLabel';

export default function Home() {
	return (
		<main>
			<h1>Hello Next {new Date().toTimeString()}</h1>
			<AddCompanyButton />
		</main>
	);
}
