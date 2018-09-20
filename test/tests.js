const { expect } = chai

describe("Check tests are running:", () => {
  it("Ran a test", () => {
    expect(true).to.equal(true);
  })
})

// Test randomElement
describe("Test the randomElement Function:", () => {
  it ('Does randomElement exist:', () => {
    expect(randomElement).to.be.a("function")
  })
  it("Gets a random element from an Array:", () => {
    expect(randomElement(["random", "random", "random"])).to.equal("random");
  })
})

// Test random0
describe("Testing random0 Function:", () => {
  it ('Does random0 exist', () => {
    expect(random0).to.be.a("function")
  })
  it("Gets a random number back from the function", () => {
    expect(random0(10)).to.be.a("number");
  })
  it("When passed 1, returns 1", () => {
    expect(random0(1)).to.equal(0);
  })
})

// Test random1
describe("Testing random1 Function:", () => {
  it ('Does random1 exist', () => {
    expect(random1).to.be.a("function")
  })
  it("Gets a random number back from the function", () => {
    expect(random1(10)).to.be.a("number");
  })
  it("When passed 1, returns 1", () => {
    expect(random1(1)).to.equal(1);
  })
})

// Test corpBSquote
describe("Testing corpBSquote Function:", () => {
  it ('Does corpBSquote exist', () => {
    expect(corpBSquote).to.be.a("function")
  })
  it("Gets a random number back from the function", () => {
    expect(corpBSquote()).to.be.a("string");
  })

})
