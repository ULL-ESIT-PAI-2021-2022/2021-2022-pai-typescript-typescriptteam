/**
 * @param {*} str 
 * @returns 
 */
export function isValid(str: string): boolean {
  let arr: string[] = str.split("-").join("").split("");

	if (arr.length != 10) {
    return false;
  }

	if (arr[9] === "X") {
    arr[9] = "10";
  }

  let value: number = arr.reduce((result, element, iter) => result + Number(element) * (10 - iter), 0);

	return (value % 11 == 0);
};