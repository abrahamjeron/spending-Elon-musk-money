const initialCash = 2020825250000;
let remainingCash = initialCash;
let spentCash = 0;
const totalCashElement = document.getElementById("tot-cash");

const buttons = [
    { id: "buy-btn1", amount: 2, countId: "counts1", sellId: "sell-btn1" },
    { id: "buy-btn2", amount: 3, countId: "counts2", sellId: "sell-btn2" },
    { id: "buy-btn3", amount: 5, countId: "counts3", sellId: "sell-btn3" },
    { id: "buy-btn4", amount: 12, countId: "counts4", sellId: "sell-btn4" },
    { id: "buy-btn5", amount: 15, countId: "counts5" , sellId: "sell-btn5"},
    { id: "buy-btn6", amount: 20, countId: "counts6" , sellId: "sell-btn6"},
    { id: "buy-btn7", amount: 60, countId: "counts7" , sellId: "sell-btn7"},
    { id: "buy-btn8", amount: 100, countId: "counts8", sellId: "sell-btn8" },
    { id: "buy-btn9", amount: 200, countId: "counts9" , sellId: "sell-btn9"},
    { id: "buy-btn10", amount: 25, countId: "counts10" , sellId: "sell-btn10"},
    { id: "buy-btn11", amount: 199, countId: "counts11", sellId: "sell-btn11" },
    { id: "buy-btn12", amount: 299, countId: "counts12" , sellId: "sell-btn12"},
    { id: "buy-btn13", amount: 350, countId: "counts13" , sellId: "sell-btn13"},
    { id: "buy-btn14", amount: 699, countId: "counts14" , sellId: "sell-btn14"},
    { id: "buy-btn15", amount: 800, countId: "counts15" , sellId: "sell-btn15"},
    { id: "buy-btn16", amount: 1500, countId: "counts16" , sellId: "sell-btn16"},
    { id: "buy-btn17", amount: 2000, countId: "counts17" , sellId: "sell-btn17"},
    { id: "buy-btn18", amount: 2300, countId: "counts18" , sellId: "sell-btn18"},
    { id: "buy-btn19", amount: 2500, countId: "counts19" , sellId: "sell-btn19"},
    { id: "buy-btn20", amount: 3000, countId: "counts20" , sellId: "sell-btn20"},
    { id: "buy-btn21", amount: 5500, countId: "counts21" , sellId: "sell-btn21"},
    { id: "buy-btn22", amount: 6000, countId: "counts22" , sellId: "sell-btn22"},
    { id: "buy-btn23", amount: 7000, countId: "counts23" , sellId: "sell-btn23"},
    { id: "buy-btn24", amount: 10000, countId: "counts24", sellId: "sell-btn24" },
    { id: "buy-btn25", amount: 12000, countId: "counts25" , sellId: "sell-btn25"},
    { id: "buy-btn26", amount: 15000, countId: "counts26" , sellId: "sell-btn26"},
    { id: "buy-btn27", amount: 20000, countId: "counts27" , sellId: "sell-btn27"},
    { id: "buy-btn28", amount: 75000, countId: "counts28" , sellId: "sell-btn28"},
    { id: "buy-btn29", amount: 150000, countId: "counts29" , sellId: "sell-btn29"},
    { id: "buy-btn30", amount: 250000, countId: "counts30" , sellId: "sell-btn30"},
    { id: "buy-btn31", amount: 300000, countId: "counts31" , sellId: "sell-btn31"},
    { id: "buy-btn32", amount: 700000, countId: "counts32" , sellId: "sell-btn32"},
    { id: "buy-btn33", amount: 1500000, countId: "counts33" , sellId: "sell-btn33"},
    { id: "buy-btn34", amount: 5250000, countId: "counts34" , sellId: "sell-btn34"},
    { id: "buy-btn35", amount: 7500000, countId: "counts35" , sellId: "sell-btn35"},
    { id: "buy-btn36", amount: 8000000, countId: "counts36" , sellId: "sell-btn36"},
    { id: "buy-btn37", amount: 15000000, countId: "counts37" , sellId: "sell-btn37"},
    { id: "buy-btn38", amount: 31000000, countId: "counts38" , sellId: "sell-btn38"},
    { id: "buy-btn39", amount: 45000000, countId: "counts39" , sellId: "sell-btn39"},
    { id: "buy-btn40", amount: 100000000, countId: "counts40" , sellId: "sell-btn40"},
    { id: "buy-btn41", amount: 145000000, countId: "counts41" , sellId: "sell-btn41"},
    { id: "buy-btn42", amount: 780000000, countId: "counts42" , sellId: "sell-btn42"},
    { id: "buy-btn43", amount: 850000000, countId: "counts43" , sellId: "sell-btn43"},
    { id: "buy-btn44", amount: 930000000, countId: "counts44" , sellId: "sell-btn44"},
    { id: "buy-btn45", amount: 2120000000, countId: "counts45" , sellId: "sell-btn45"}
];

function updateUI(amount, countElement) {
  if (remainingCash >= amount) {
    remainingCash -= amount;
    spentCash += amount;
  } else {
    alert("Not enough cash!");
    return;
  }

  if (remainingCash < 0) {
    remainingCash = 0;
  }

  totalCashElement.innerText = "$" + remainingCash.toLocaleString();
  countElement.innerText = Number(countElement.innerText) + 1;
}

function sellItem(amount, countElement) {
  if (Number(countElement.innerText) > 0) {
    remainingCash += amount;
    spentCash -= amount;
    countElement.innerText = Number(countElement.innerText) - 1;
  } else {
    alert("No items to sell!");
  }

  totalCashElement.innerText = "$" + remainingCash.toLocaleString();
}
buttons.forEach((button) => {
    const { id, amount, countId, sellId } = button;
    const buyBtn = document.getElementById(id);
    const sellBtn = document.getElementById(sellId);
    const countElement = document.getElementById(countId);
    
    if (buyBtn) {
      buyBtn.addEventListener("click", function () {
        updateUI(amount, countElement);
      });
    }
  
    if (sellBtn) {
      sellBtn.addEventListener("click", function () {
        sellItem(amount, countElement);
      });
    }
  });

