import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
test('match snapshots', async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
});