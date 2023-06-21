console.log("TradingView Auto Trader Script loading");

//SELECTORS
var alertSelector = 'div[data-qa-dialog-name="alert-fired"]',
  alertMessageSelector =
    'div[data-qa-dialog-name="alert-fired"] div[class*="secondaryRow"]',
  alertCloseSelector =
    'div[data-qa-dialog-name="alert-fired"] span[class*="close"]',
  btnBuySelector = 'div[class*="buyButton"]',
  btnSellSelector = 'div[class*="sellButton"]',
  btnCloseSelector =
    '.positions .ka-tr.ka-row td[data-label=""] path[d="M13.35 5.35a.5.5 0 0 0-.7-.7L9 8.29 5.35 4.65a.5.5 0 1 0-.7.7L8.29 9l-3.64 3.65a.5.5 0 0 0 .7.7L9 9.71l3.65 3.64a.5.5 0 0 0 .7-.7L9.71 9l3.64-3.65z"]';

//ORDER IDENTIFIERS
var buyOrderIdentifier = "position: 1";
var sellOrderIdentifier = "position: -1";
var closeOrderIdentifier = "position: 0";


function main() {
  let alert = document.querySelector(alertSelector);
  if (!alert) return;

  let alertMessage = alert.querySelector(alertMessageSelector);
  if (!alertMessage) return;
  alertMessage = alertMessage.innerText;

  let btnCloseAlert = alert.querySelector(alertCloseSelector);
  if (btnCloseAlert) btnCloseAlert.click();

  let isCloseOrder = alertMessage.includes(closeOrderIdentifier);
  let isBuyOrder = alertMessage.includes(buyOrderIdentifier);
  let isSellOrder = alertMessage.includes(sellOrderIdentifier);

  if (isCloseOrder) {
    document
      .querySelector(btnCloseSelector)
      ?.parentElement?.parentElement?.click();
    return;
  }
  if (isBuyOrder) {
    document.querySelector(btnBuySelector)?.click();
    return;
  }

  if (isSellOrder) {
    document.querySelector(btnSellSelector)?.click();
    return;
  }
}

setInterval(main, 500);
console.log("TradingView Auto Trader Script loaded");
