import { render, screen, waitFor } from '@testing-library/react';
import Table from '../Table';

describe('Table Component', () => {
    
    global.fetch = jest.fn();
    global.setProjectsData = jest.fn();
    const mockResponse = [{ 's.no': 1, 'percentage.funded': 180, 'amt.pledged': 1345 }];

test('match snapshots', async () => {
    fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse)
      });
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
});
test('render component and fetch projects', async () => {
    
    fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse)
      });

    render(<Table />);
    await waitFor(() => screen.findByTestId('key-1')); 
    expect(screen.getByTestId('key-1')).toHaveTextContent('1');
});
test('render component and fetch projects more then 5', async () => {

    const mockResponse1 = [
        { 's.no': 1, 'percentage.funded': 180, 'amt.pledged': 1345 },
        { 's.no': 2, 'percentage.funded': 180, 'amt.pledged': 1345 },
        { 's.no': 3, 'percentage.funded': 180, 'amt.pledged': 1345 },
        { 's.no': 4, 'percentage.funded': 180, 'amt.pledged': 1345 },
        { 's.no': 5, 'percentage.funded': 180, 'amt.pledged': 1345 },
        { 's.no': 6, 'percentage.funded': 180, 'amt.pledged': 1345 },
        { 's.no': 7, 'percentage.funded': 180, 'amt.pledged': 1345 }
    ]
    
    fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse1)
      });

    render(<Table />);
    await waitFor(() => screen.findByTestId('key-1')); 
    expect(screen.getByTestId('key-1')).toHaveTextContent('1');
});
});