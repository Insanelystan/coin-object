console.log("Israel");
let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

    this.state = Math.floor(Math.random() * 2);
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    console.log(this.state);

    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },

  toHTML: function () {
    let image = document.createElement("img");

    if (this.state === 0) {
      image.src = "./image/tails.jpg";
    } else {
      image.src = "./image/head.jpg";
    }

    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips,
// display the result of each flip as a string on the page (make use of your toString() method)
function display20Flips() {
  for (let newCoin = 0; newCoin < 20; newCoin++) {
    coin.flip();
    document.body.append(coin.toString());
  }
}

// Write a function called display20Images,
// again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string,
// display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).

function display20Images() {
  for (let newCoin = 0; newCoin < 20; newCoin++) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}

coin.flip();
document.body.append(coin.toString());

coin.flip();
document.body.append(coin.toHTML());

display20Flips();
display20Images();
