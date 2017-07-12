$ (document).ready(function () {
    $('#js-convert-gbp').submit(function (event) {
        event.preventDefault()
        
        var target = event.target
        var amount = event.target.amount.value
        var currency = event.target.currency.value 
        var convertedAmount = currencyConverter.convertTo(currency, amount) 
        //alert(amount + ' GBP in ' + currency + ' is ' + convertedAmount)
        $('#message').html(amount + ' GBP in ' + currency + ' is ' + convertedAmount)  
        console.log($('#message').html())
    })
})