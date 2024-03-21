function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRates = data.rates;
            const conversionRate = exchangeRates[toCurrency];
            const convertedAmount = amount * conversionRate;
  
            document.getElementById('result').innerText = `${amount} ${fromCurrency} équivaut à ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.querySelector('#converter input[type="submit"]');
    convertButton.addEventListener('click', convert);
  });
  