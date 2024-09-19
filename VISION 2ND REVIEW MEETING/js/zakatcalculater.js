document.getElementById('calculate-btn').addEventListener('click', function () {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const silver = parseFloat(document.getElementById('silver').value) || 0;
    const investments = parseFloat(document.getElementById('investments').value) || 0;
    const moneyOwed = parseFloat(document.getElementById('money_owed').value) || 0;
    const stock = parseFloat(document.getElementById('stock').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    const shortTerm = parseFloat(document.getElementById('short_term').value) || 0;
    const otherExpenses = parseFloat(document.getElementById('other_expenses').value) || 0;

    const totalAssets = cash + gold + silver + investments + moneyOwed + stock;
    const totalExpenses = expenses + shortTerm + otherExpenses;

    document.getElementById('total_assets').innerText = totalAssets.toFixed(2);
    document.getElementById('total_expenses').innerText = totalExpenses.toFixed(2);

    const nisab = 4625.21; // Value of Nisab in GBP
    const netAssets = totalAssets - totalExpenses;

    if (netAssets >= nisab) {
        document.getElementById('zakat_due').innerText = "ZAKAT DUE";
    } else {
        document.getElementById('zakat_due').innerText = "ZAKAT NOT DUE";
    }
});
