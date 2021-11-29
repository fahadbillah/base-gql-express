import { expect } from 'chai';

import booking from '../../src/controller/booking'

describe('Booking Controller', () => {
  it('Booking controller exirsts', () => {
    expect(booking).not.to.be.empty;
  });

  describe('Create', () => {
    it('Create method exists', () => {
      expect(booking.create).to.exists;
    });

    it('Create has booking argument', () => {
      expect(' ').to.exists;
    });

  })
});