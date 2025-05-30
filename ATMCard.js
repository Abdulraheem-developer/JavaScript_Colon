function validateAccountNumber(ATMNumber) {
  if (ATMNumber.length === 16 && ATMNumber[0] === 4) {
    return {
      issuer: "Visa-Card",
      status: "Verified"
    };
  } else if (ATMNumber.length === 16 && ATMNumber[0] === 5) {
    return {
      issuer: "Master-Card",
      status: "Verified"
    };
  } else if (ATMNumber.length === 15 && ATMNumber[0] === 3) {
    return {
      issuer: "American-Express",
      status: "Verified"
    };
  } else if (ATMNumber.length === 16 && ATMNumber[0] === 6) {
    return {
      issuer: "Discover",
      status: "Verified"
    };
  } else {
    return {
      valid: false,
      reason: "Invalid number"
    };
  }
}
let ATMNumber = [4, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 5, 6, 7];
console.log(validateAccountNumber(ATMNumber));
