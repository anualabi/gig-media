import React, { useEffect } from "react";

import { fetchCompanyValues, fetchCompanyOffices } from "../api";

const IndexPage: React.FC = () => {
	useEffect(() => {
		const getCompanyApis = async () => {
			const compnayValues = await fetchCompanyValues();
			const compnayOffices = await fetchCompanyOffices();

			console.log(`Company Values`, compnayValues);
			console.log(`Compnay Offices`, compnayOffices);
		};

		getCompanyApis();
	}, []);

	return (
		<main className="">
			<h1>Homepage</h1>
		</main>
	);
};

export default IndexPage;
