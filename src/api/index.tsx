import { fetchCompanyApi } from "./api";

export const fetchCompanyValues = async () => {
	try {
		const { data } = await fetchCompanyApi.get(`company-values`);
		return data;
	} catch (error) {
		throw new Error("Unable to fetch company values");
	}
};

export const fetchCompanyOffices = async () => {
	try {
		const { data } = await fetchCompanyApi.get(`offices`);
		return data;
	} catch (error) {
		throw new Error("Unable to fetch company offices");
	}
};
