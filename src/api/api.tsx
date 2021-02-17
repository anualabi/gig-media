import axios from "axios";

export const fetchCompanyApi = axios.create({
	baseURL: process.env.COMPANY_API,
	headers: {
		token: `${process.env.API_TOKEN}`,
	},
});
