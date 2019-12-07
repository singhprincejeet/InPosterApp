export default footerTextFormValidation = {
  text: {
    presence: {
      allowEmpty: false,
    },
  },
  size: {
    presence: {
      allowEmpty: false,
    },
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
    },
  },
  align: {
    exclusion: {
      within: ["0"],
      message: "^Please selct a value for align",
    }
  }
}