function Makedonations() {
    return obj = {
        list: [],
        MakeDonator: MakeDonator,
        collect: 0
    }

}

function MakeDonator(name, lastname, money) {
    var Donator = {
        name: name,
        lastname: lastname,
        money: money
    }
    this.list.push(Donator)
    this.collect += money


}
var first = Makedonations()

var name;
var last;
var amount;

$(".donator").on("click", function () {
    var counter = parseInt(($('#amountId').val()))
    console.log('test', first.collect, counter);
    
    name = $("#name").val()
    last = $('#lastname').val()
    amount = Number($('#amountId').val())
    console.log(amount)
    console.log($('.Money').val(),'hey')

    first.MakeDonator(name, last, amount)
    $('.Money').html(first.collect) 
    console.log(name, last, amount)
    var li = $('<li></li>')
  $('li').append(name)
  $('li').append(last)
  $('li').append(amount)



})



console.log(this.collect)