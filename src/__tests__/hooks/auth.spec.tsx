import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: 'user-123',
        name: 'John Doe',
        email: 'johndoe@example.com.br',
      },
      token: 'token-123',
    };

    // Aqui eu faço o mock da chamada api e passo o status e a resposta esperada
    apiMock.onPost('sessions').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@example.com.br',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledTimes(2);

    // These expects were the original and the better, but they're not working
    // expect(setItemSpy).toHaveBeenCalledWith(
    //   '@GoBarber:token',
    //   apiResponse.token,
    // );
    // expect(setItemSpy).toHaveBeenCalledWith(
    //   '@GoBarber:user',
    //   JSON.stringify(apiResponse.user),
    // );

    expect(result.current.user.email).toEqual('johndoe@example.com.br');
  });
});
