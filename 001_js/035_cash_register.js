/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 *
 * Currency Unit	Amount
 * Penny	$0.01 (PENNY)
 * Nickel	$0.05 (NICKEL)
 * Dime	$0.1 (DIME)
 * Quarter	$0.25 (QUARTER)
 * Dollar	$1 (ONE)
 * Five Dollars	$5 (FIVE)
 * Ten Dollars	$10 (TEN)
 * Twenty Dollars	$20 (TWENTY)
 * One-hundred Dollars	$100 (ONE HUNDRED)
 */

function checkCashRegister(price, cash, cid) {
	let change = cash - price;
	let status;

	let register = {
		PENNY: cid[0][1],
		NICKEL: cid[1][1],
		DIME: cid[2][1],
		QUARTER: cid[3][1],
		ONE: cid[4][1],
		FIVE: cid[5][1],
		TEN: cid[6][1],
		TWENTY: cid[7][1],
		"ONE HUNDRED": cid[8][1],
	};
	let changeObj = {
		PENNY: 0,
		NICKEL: 0,
		DIME: 0,
		QUARTER: 0,
		ONE: 0,
		FIVE: 0,
		TEN: 0,
		TWENTY: 0,
		"ONE HUNDRED": 0,
	};

	function checkReg(denom, amount) {
		amount = Number(amount);
		if (change >= amount) {
			if (register[denom] >= amount) {
				changeObj[denom] = Number(
					(changeObj[denom] + amount).toFixed(2)
				);
				register[denom] = Number((register[denom] - amount).toFixed(2));
				change = Number((change - amount).toFixed(2));
				return true;
			}
		}
		return false;
	}

	while (0 < change) {
		// console.log("change at hand", changeObj);
		// console.log("register", register);
		// console.log("remaining", change);

		if (checkReg("ONE HUNDRED", 100)) continue;
		if (checkReg("TWENTY", 20)) continue;
		if (checkReg("TEN", 10)) continue;
		if (checkReg("FIVE", 5)) continue;
		if (checkReg("ONE", 1)) continue;
		if (checkReg("QUARTER", 0.25)) continue;
		if (checkReg("DIME", 0.1)) continue;
		if (checkReg("NICKEL", 0.05)) continue;
		if (checkReg("PENNY", 0.01)) continue;
		else break;
	}

	let changeArr = [];
	for (const [key, value] of Object.entries(changeObj)) {
		changeArr.push([key, Number(value)]);
	}

	if (change > 0) {
		status = "INSUFFICIENT_FUNDS";
		changeArr = [];
	} else if (change === 0 && Object.values(register).every((x) => x === 0)) {
		status = "CLOSED";
	} else {
		status = "OPEN";
		changeArr = changeArr.filter((x) => x[1] > 0).reverse();
	}

	return { status: status, change: changeArr };
}

// price, cash, cid
let a = checkCashRegister(19.5, 20, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100],
]);

console.log(a);

a = checkCashRegister(3.26, 100, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100],
]);

console.log(a);

a = checkCashRegister(19.5, 20, [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0],
]);

console.log(a);

a = checkCashRegister(19.5, 20, [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 1],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0],
]);

console.log(a);

a = checkCashRegister(19.5, 20, [
	["PENNY", 0.5],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0],
]);

console.log(a);
