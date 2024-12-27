import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Component', () => {

const onPageChangeMock = jest.fn();

const renderComponent = (currentPage) =>{
    render( 
        <Pagination 
        totalItems={30}
        itemsPerPage={5}
        currentPage={currentPage}
        onPageChange={onPageChangeMock}
        />
    );
}
test('Verify prev button(<<) should be disbaled of pagination', () => {
    renderComponent(1)
    const pageButton = screen.getByTestId('prev-button');
    expect(pageButton).toBeDisabled();
});
test('Verify next button(>>) should be disbaled of pagination', () => {
    renderComponent(6)
    const pageButton = screen.getByTestId('next-button');
    expect(pageButton).toBeDisabled();
  });
  test('Verify both next button(>>) and prev button (<<)should be enabled of pagination', () => {
    renderComponent(4)
    const nextPageButton = screen.getByTestId('next-button');
    const prevPageButton = screen.getByTestId('prev-button');
    expect(prevPageButton).not.toBeDisabled();
    expect(nextPageButton).not.toBeDisabled();
  });
  test('handle on page change', () => {
    renderComponent(4)
    const pageButton = screen.getByTestId('page-button-5');
    fireEvent.click(pageButton);
    expect(onPageChangeMock).toHaveBeenCalled();
  });
  test('handle click on next button', () => {
    renderComponent(4);
    const pageButton = screen.getByTestId('next-button');
    fireEvent.click(pageButton);
    expect(onPageChangeMock).toHaveBeenCalled();
  });
  test('handle click on prev button', () => {
    renderComponent(4);
    const pageButton = screen.getByTestId('prev-button');
    fireEvent.click(pageButton);
    expect(onPageChangeMock).toHaveBeenCalled();
  });
});