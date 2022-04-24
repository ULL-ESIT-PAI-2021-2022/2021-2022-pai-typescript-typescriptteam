// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Function that returns the discount price in string or number format
  function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice: number = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
  }

//Function assigned to a string variable
  let resultStr: string = getNetPrice(100, 0.05, true) as string;
  console.log("El tipo es:", typeof(resultStr), "y vale:", resultStr);

//Function assigned to a number variable
  let resultNum: number = getNetPrice(100, 0.05, false) as number;
  console.log("\nEl tipo es:", typeof(resultNum), "y vale:", resultNum);

//Function assigned to a typed (number | string) variable
  let resultBothTypes: number | string;

  resultBothTypes = getNetPrice(100, 0.05, true) as string;
  console.log("\nEl tipo es:", typeof(resultBothTypes), "y vale:", resultBothTypes);

  resultBothTypes = getNetPrice(100, 0.05, false) as number;
  console.log("El tipo es:", typeof(resultBothTypes), "y vale:", resultBothTypes);