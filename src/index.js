module.exports = function toReadable (number) {
	const numberZero = 'zero';
	const firstTenNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const tenNineteenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const doubleRoundNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundreds = 'hundred';
	number = String(number);
	let i = number;
	let j = number;
	let y = number;
 
	if (+number === 0) {
		return numberZero;
 
	} else if (number > 0 && number < 10) {
		return firstTenNumbers[i];
 
	} else if (number >= 10 && number < 20) {
		i = number.slice(-1);
		return tenNineteenNumbers[i];
 
	} else if (number >= 20 && number < 100) {
			  i = number.slice(0, 1);
		j = number.slice(-1);
		return `${doubleRoundNumbers[i]} ${firstTenNumbers[j]}`.trim();
		 
	}  else if (number % 100 === 0) {
		i = number.slice(0, 1);
		return `${firstTenNumbers[i]} ${hundreds}`; 
		 
	}   else if ((number >= 100 && number < 1000) && number.slice(-2) < 10) {
		i = number.slice(0, 1);
		j = number.slice(-1);
		return `${firstTenNumbers[i]} ${hundreds} ${firstTenNumbers[j]}`;
 
	}   else if ((number >= 100 && number < 1000) && (number.slice(-2) >= 10 && number.slice(-2) < 20)) {
		 i = number.slice(0, 1);
		 j = number.slice(-1);
		return `${firstTenNumbers[i]} ${hundreds} ${tenNineteenNumbers[j]}`;
 
	}   else if ((number >= 100 && number < 1000) && (number.slice(-2) >= 20)) {
		 i = number.slice(0, 1);
		 j = number.slice(1, 2);
				y = number.slice(-1);
		return `${firstTenNumbers[i]} ${hundreds} ${doubleRoundNumbers[j]} ${firstTenNumbers[y]}`.trim();
	}   
} 
