import { PINATA } from "$lib/constants";

export const pinMixToIPFS = async (
	name: string,
	mix: File,
	owner: string
): Promise<Response> => {
	const data = new FormData();
	data.append("file", mix);
	data.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));
	data.append(
		"pinataMetadata",
		JSON.stringify({
			name,
			keyvalues: {
				owner,
			},
		})
	);

	return await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${PINATA.Token}`,
		},
		body: data,
	});
};
