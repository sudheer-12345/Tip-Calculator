let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculatedTip() {
    let billElement = billAmountElement.value;
    let percentage = percentageTipElement.value;
    if (billElement === "") {
        errorMessageElement.textContent = "Please Enter a Valid Inupt";
    } else if (percentage === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageElement.textContent = "";
        let billTip = parseInt(billElement);
        let percentageTip = parseInt(percentage);
        let calculatedTip = (percentage / 100) * billTip;
        let totalCalculatedTip = billTip + calculatedTip;
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = totalCalculatedTip;
    }
}
