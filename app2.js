
    angular.module('Plunker', []) 

    .controller('ShoppingListAddController', ShoppingListAddController) 

    .controller('ShoppingListShowController', ShoppingListShowController) 

    .service('ShoppingListService', ShoppingListService);

    ShoppingListAddController.$inject=['ShoppingListService'];

    function ShoppingListAddController(ShoppingListService){

        var itemAdder=this;

        itemAdder.itemName="";

        itemAdder.itemQuantity="";

        itemAdder.itemPrice="";

        itemAdder.addItem=function (){

            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity, itemAdder.itemPrice);

            }

            }

            ShoppingListShowController.$inject=['ShoppingListService'];

            function ShoppingListShowController(ShoppingListService){

                var showList=this;

                showList.items=ShoppingListService.getItems();

                showList.removeItem=function (itemIndex){ShoppingListService.removeItem(itemIndex);

                };

                }

                function ShoppingListService(){

                    var service=this;

                    var items=[];

                    service.addItem=function (itemName, quantity, price){

                        var item={name: itemName,quantity: quantity,price: price};

                        items.push(item);

                        };

                        service.removeItem=function (itemIndex){items.splice(itemIndex,1);};

                        service.getItems=function (){

                            return items;};}
