"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Chad Williams 
   Date:   2.19.19
   
   Filename: tc_cart.js
	
*/

// step 10 creats a var orderTotal to equal zeo
var orderTotal = 0;
// step 11 creats a var cartHTML with html code as a text string
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// step 12 creates a for loop creating a index var equaling zero that will run through all of array item's amount of value
for (var i = 0; i < item.length; i++) {
    // step 12 A adds html code to cartHTML and the index value of the value in the array item
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png'alt='" + item[i] + "'/></td>";
    // step 12 B more html code to cartHTML and running the index value 
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    // step 12 C multiplies the price of items by their quantity number in their array
    var itemCost = itemPrice[i] * itemQty[i];
    // step 12 d adds more html and item cost in html text strings
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    // adds itemcost to the var ordertotal which displays in html
    orderTotal += itemCost;
}
// step 13 more html and inserts orderTotal in
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
// step 14 grabs the div element with id of cart, inserts cartHTML text strings into html
document.getElementById("cart").innerHTML = cartHTML;