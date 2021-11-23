import { expect } from 'chai';

import {
  CustomApolloError,
} from '../src/utils';

describe('CustomApolloError', () => {
  describe('UnknownError', () => {
    let error;
    beforeEach(() => {
      error = new CustomApolloError('some unknown error');
    });

    it('should validate UnknownError code', () => {
      expect(error.extensions.code).to.equal('UnknownError');
    });

    it('should validate UnknownError httpCode', () => {
      expect(error.extensions.httpCode).to.equal(400);
    });
  });
});
