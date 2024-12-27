import { getPageNumbers } from '../Pagination.utils';

describe('function getPageNumbers', ()=>{
    test('should return page numbers', () => {
        const results  = getPageNumbers(12, 30)
        expect(results.length).toBe(10);
    }); 
});

