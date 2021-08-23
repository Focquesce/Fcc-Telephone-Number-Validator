function telephoneCheck(str) {
  let validatoryRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return validatoryRegex.test(str);
}
console.log(telephoneCheck("-1 (757) 622-7382"));
