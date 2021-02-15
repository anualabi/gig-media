let activeEnv =
	process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: ${activeEnv}`);

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "GIG Media",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-offline",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/images/icon.png",
			},
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
	],
};
