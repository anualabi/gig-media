import React from "react";

interface Props {
	title: String;
	paragraph: String;
	styleName: String;
	randomHex: String;
	rotation: number;
}

const GigList: React.FC<Props> = ({
	title,
	paragraph,
	styleName,
	randomHex,
	rotation,
}) => {
	return (
		<div className={`${styleName}`} style={{ backgroundColor: `${randomHex}` }}>
			<h1 className="title" style={{ transform: `rotate(${rotation}deg)` }}>
				{title}
			</h1>
			<p
				className="description"
				style={{ transform: `rotate(${rotation}deg)` }}>
				{paragraph}
			</p>
		</div>
	);
};

export default GigList;
