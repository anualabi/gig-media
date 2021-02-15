import axios from "axios";

export const fetchCompanyApi = axios.create({
	baseURL: process.env.COMPANY_API,
	headers: {
		token: `aaEe20K65nsGHEsQyrWWAtWE6SX81R8Lqv5tOgax4zNuaaNvL8nsA6X1N337PVBZKodyrc`,
	},
});
