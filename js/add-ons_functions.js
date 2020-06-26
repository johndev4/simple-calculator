// Add-ons Functions
function preventUndefined() {
	switch ($display.val()) {
		case "":
		case "-":
			$display.val($display.val() + "0");
			opState = false;
			currentOperator = null;
			fn = null;
			sn = null;
			break;
		case "0":
		case "-0":
			$display.val($display.val().substring(0, $display.val().length-1));
			break;

		default:
	}
}

function compute(op) {
	switch (op){
		case 'mod':
			return Number(fn) % Number(sn);
		case "÷":
			return Number(fn) / Number(sn);
		case "×":
			return Number(fn) * Number(sn);
		case "−":
			return Number(fn) - Number(sn);
		case "+":
			return Number(fn) + Number(sn);
		default:
	}
}