import React, { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import { fetchCompanyValues, fetchCompanyOffices } from "../api";
import GigList from "../components/GigList";
import Logo from "../layout/Logo";

const IndexPage: React.FC = (props) => {
	const [companyValues, setcompanyValues] = useState<any[]>([]);
	const [companyOffices, setCompanyOffices] = useState<any[]>([]);
	const [language, setLanguage] = useState("en");
	const [color, setColor] = useState("#fff");
	const [rotation, setRotation] = useState(0);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const getCompanyApis = async () => {
			const companyValues = await fetchCompanyValues();
			const companyOffices = await fetchCompanyOffices();

			setcompanyValues(companyValues);
			setCompanyOffices(companyOffices);
		};

		getCompanyApis();
	}, []);

	// Randomize color
	const randomizeColor = () => {
		const randomColor = `#` + Math.floor(Math.random() * 16777215).toString(16);
		setColor(randomColor);
	};

	// Rotate Text
	const rotateText = () => {
		setRotation((prevCount) => prevCount + 180);
	};

	// Toggle Monochrome
	checked
		? document.body.classList.add("monochrome")
		: document.body.classList.remove("monochrome");

	// Switch between languages
	const valuesEn = companyValues && companyValues.sort().slice(0, 5);
	const valuesSv = companyValues && companyValues.sort().slice(5, 11);
	const selectedLang = (e) => {
		e.target.value === "en" ? setLanguage("en") : setLanguage("sv");
	};
	const gigValues = language === "en" ? valuesEn : valuesSv;

	return (
		<div id="outer-container">
			<Sidebar
				{...props}
				selectedLang={selectedLang}
				randomizeColor={randomizeColor}
				check={() => setChecked(!checked)}
				rotateText={rotateText}
			/>
			<main id="page-wrap" className="site-wrapper">
				{gigValues.map(({ id, title, description }) => (
					<GigList
						key={id}
						title={title}
						paragraph={description}
						styleName={`value value-${id}`}
						randomHex={color}
						rotation={rotation}
					/>
				))}
				<Logo />
				{companyOffices.map(({ id, country, address }) => (
					<GigList
						key={id}
						title={country}
						paragraph={address}
						styleName={`country country-${id}`}
						randomHex={color}
						rotation={rotation}
					/>
				))}
			</main>
		</div>
	);
};

export default IndexPage;
