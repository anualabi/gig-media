import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Button, Checkbox } from "semantic-ui-react";

interface Props {
	selectedLang: any;
	randomizeColor: any;
	check: any;
	rotateText: any;
}

const Sidebar: React.FC<Props> = ({
	selectedLang,
	randomizeColor,
	check,
	rotateText,
}) => {
	return (
		<Menu right>
			<select className="lang-select" onChange={selectedLang}>
				<option value="en">English</option>
				<option value="sv">Swedish</option>
			</select>
			<Button color="green" onClick={randomizeColor}>
				Randomize Color
			</Button>
			<Checkbox label="Show Monochrome" onClick={check} />
			<Button color="green" onClick={rotateText}>
				Rotate Text
			</Button>
		</Menu>
	);
};

export default Sidebar;
