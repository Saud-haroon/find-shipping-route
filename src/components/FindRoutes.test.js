import { render, fireEvent } from '@testing-library/react';

import FindRoutes from './FindRoutes';

it('checkFindRoutesRender', () => {
    const { queryByTitle } = render(<FindRoutes />);
    const sclt = queryByTitle('origin');
    const sclt_1 = queryByTitle('destination');
    expect(sclt).toBeTruthy();
    expect(sclt_1).toBeTruthy();
});
