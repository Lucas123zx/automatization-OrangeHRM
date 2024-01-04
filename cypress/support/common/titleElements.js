class TitleModule {
  module = (functionality) => {return `//h6[normalize-space()='${functionality}']`}
}

module.exports = new TitleModule()