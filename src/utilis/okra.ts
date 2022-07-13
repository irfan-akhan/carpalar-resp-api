async function sendApplication(id: string): Promise<Boolean> {
	try {
		console.log("in oakra");
		return true;
	} catch (error) {
		return false;
	}
}
const okra = {
	sendApplication,
};
export default okra;
