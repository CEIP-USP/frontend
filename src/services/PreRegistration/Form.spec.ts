import { FormHandler } from './Form';

function getHttpClientMock() {
  return {
    post: jest.fn(),
  };
}

describe(FormHandler, () => {
  describe('handleSubmit', () => {
    let handler: FormHandler;

    beforeEach(() => {
      handler = new FormHandler('', '', '', '', '', '', '', new Date(), {
        type: 'undocumented',
      });
    });

    it('rejects the promise when validation fails', () => {
      const errors = ['foo', 'bar'];

      handler.validateForm = jest
        .fn()
        .mockReturnValueOnce({ isValid: false, errors });

      expect(handler.handleSubmit(getHttpClientMock())).rejects.toEqual(errors);
    });

    it('does not make the request when validation fails', () => {
      const errors = ['foo', 'bar'];

      handler.validateForm = jest
        .fn()
        .mockReturnValueOnce({ isValid: false, errors });

      const mock = getHttpClientMock();
      handler.handleSubmit(mock).catch(() => {
        expect(mock.post).not.toHaveBeenCalled();
      });
    });

    it('makes the request when validation passes', () => {
      handler.validateForm = jest.fn().mockReturnValueOnce({ isValid: true });

      const mock = getHttpClientMock();
      mock.post.mockResolvedValue(true);
      handler.handleSubmit(mock).then(() => {
        expect(mock.post).toHaveBeenCalled();
      });
    });
  });
});
