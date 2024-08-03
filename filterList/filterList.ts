import * as R from 'ramda';

type User = {
	id: number;
	name: string | null;
	status: number;
};

type ProcessedUser = {
	id: number;
	name: string,
	className: string | null;
	status: number;
};

const filterInvalidName = ({ id, name, status }: User): ProcessedUser | null => {
	if (!name) {
		return null;
	}
	return {
		id,
		name,
		className: 'online-01',
		status
	};
};

const isValidStatus = (targetStatus: number) => ({ status }: ProcessedUser): boolean => status === targetStatus;
const isNotNil = R.complement(R.isNil);

export const filterList = (data: User[], targetStatus: number): ProcessedUser[] => {
	const mapData = R.map(filterInvalidName, data);
	const filteredOne = R.filter(isNotNil, mapData);
	const filteredTwo = R.filter(isValidStatus(targetStatus), filteredOne);

	return filteredTwo;
};
