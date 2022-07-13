export class apiFeatures {
	data: any;
	readonly queryString: any;
	constructor(data: any, queryString: any) {
		this.data = data;
		this.queryString = queryString;
	}
	sort() {
		if (this.queryString.sort && this.queryString.sort.trim()) {
			const sortBy = this.queryString.sort.split(",").join(" ");

			this.data = this.data.sort(sortBy);
			return this;
		}
		this.data = this.data.sort("-createdAt");
		return this;
	}
	filter() {
		const excludeFields: Array<string> = [
			"page",
			"limit",
			"sort",
			"fields",
			"keyword",
		];
		const queryObj: any = { ...this.queryString };
		excludeFields.forEach((field) => delete queryObj[field]);
		let queryStr: string = JSON.stringify(queryObj);
		queryStr = JSON.parse(
			queryStr.replace(
				/\b(gt|gte|lt|lte|ne|eq)\b/g,
				(match) => `$${match}`
			)
		);
		this.data = this.data.find(queryObj);
		return this;
	}
	limitFields() {
		const { fields } = this.queryString;
		if (fields && fields.trim()) {
			const selectFields = fields.toString().replaceAll(",", " ");
			this.data = this.data.select(selectFields);
			return this;
		}
		return this;
	}
	paginate() {
		const { page, limit } = this.queryString;
		const skipIndex = (page - 1) * limit;
		this.data = this.data.skip(skipIndex).limit(limit);
		return this;
	}
}
