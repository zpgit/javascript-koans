var expect = require('chai').expect;

describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true 
    expect(true).to.be.true;
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).to.be.true;
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).to.equal(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).to.equal(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).to.equal(2);
  });
});
