var $display = $("#cal-display");
var operationState = false;
var currentOperator = null;
var fn = null;
var sn = null;


// Event Handler Functions
function btnClear_Event() {
	$display.val("");
	preventUndefined();
}

function btnBkspace_Event() {
	if ($display.val() == "-0"){
		btnClear_Event();
		return;
	}

	if (operationState === true){
		btnClear_Event();
	}
	$display.val($display.val().substring(0, $display.val().length-1));
	preventUndefined();
}

function btnNum_Event(num) {
	if (operationState === true){
		$display.val("0");
		operationState = false;
	}
	preventUndefined();
	$display.val($display.val() + num);
}

function btnNeg_Event() {
	if (operationState === true){
		$display.val("0");
		operationState = false;
	}

	if ($display.val().charAt(0) != '-'){
		$display.val("-" + $display.val());
	} else{
		$display.val($display.val().substring(1));
	}
}

function btnPt_Event() {
	if (operationState === true){
		$display.val("0");
		operationState = false;
	}

	if (!$display.val().includes(".")){
		$display.val($display.val() + ".");
	}
}

function btnOp_Event(op) {
	if (fn === null){
		fn = $display.val();

	} else if (sn === null){
		sn = $display.val();
		$display.val(compute(currentOperator));
		fn = $display.val();
		sn = null;
	}
	currentOperator = op;
	operationState = true;
}

function btnEql_Event() {
	if (fn !== null){
		sn = $display.val();
		$display.val(compute(currentOperator));
		fn = null;
		sn = null;
	}
	currentOperator = null;
	operationState = true;
}