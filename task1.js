const bankAccounts = {
  1234567890: 0,
};

function deposit() {
  const accountNumber = document.getElementById("accountNumber").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (accountNumber in bankAccounts) {
    bankAccounts[accountNumber] += amount;
    updateBalance(accountNumber);
  } else {
    alert("Аккаунт не знайдено.");
  }
}

function withdraw() {
  const accountNumber = document.getElementById("accountNumber").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (accountNumber in bankAccounts) {
    if (bankAccounts[accountNumber] >= amount) {
      bankAccounts[accountNumber] -= amount;
      updateBalance(accountNumber);
    } else {
      alert("Недостатньо сумми.");
    }
  } else {
    alert("Аккаунт не знайдено.");
  }
}

function updateBalance(accountNumber) {
  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = `Balance: UAH ${bankAccounts[
    accountNumber
  ].toFixed(2)}`;
}
