import { filterList } from './filterList'; // 실제 파일 경로를 사용

describe('filterList function', () => {
    test('should filter out invalid names and status', () => {
        const data = [
            { id: 1, name: 'tommy', status: 0 },
            { id: 2, name: 'violet', status: 1 },
            { id: 3, name: 'jake', status: 1 },
            { id: 4, name: null, status: 0 }
        ];
        const result = filterList(data, 1);

        expect(result).toEqual([
            { id: 2, name: 'violet', className: 'online-01', status: 1 },
            { id: 3, name: 'jake', className: 'online-01', status: 1 },
        ]);
    });
});
