import { applicationInterface } from "../interfaces/application.interface";
import ApplicationModel from "../models/application.model";
import { apiFeatures } from "../utilis/apiFeatures";
import logger from "../utilis/logger";
import okra from "../utilis/okra";

export async function getAllApplications(query: any) {
	try {
		// const applications = await ApplicationModel.find({});

		const results = new apiFeatures(ApplicationModel.find({}), query)
			.filter()
			.paginate()
			.sort()
			.limitFields();
		return results.data;
	} catch (e: any) {
		logger.fatal(e.message);
		throw new Error(e.message);
	}
}
export async function updateApplication(
	id: string,
	input: applicationInterface
) {
	try {
		const { updateThirdPartyStatus } = input;
		console.log(input);
		if (updateThirdPartyStatus) {
			delete input.updateThirdPartyStatus;
			const oakraResp = await okra.sendApplication(id);
			if (oakraResp) {
				input["thirdPartyStatus"] = "sent";
			} else {
				input["thirdPartyStatus"] = "failed";
			}
			console.log("after oakra");
		}
		const application = await ApplicationModel.findOneAndUpdate(
			{ _id: id },
			input,
			{ new: true }
		);
		return application;
	} catch (e: any) {
		logger.fatal(e.message);
		throw new Error(e.message);
	}
}
export async function getApplication(id: string) {
	try {
		const application = await ApplicationModel.findById(id);
		return application;
	} catch (e: any) {
		logger.fatal(e.message);
		throw new Error(e.message);
	}
}

export async function addApplications(input: applicationInterface) {
	try {
		const application = await ApplicationModel.create(input);
		return application;
	} catch (e: any) {
		logger.fatal(e.message);
		throw new Error(e.message);
	}
}
