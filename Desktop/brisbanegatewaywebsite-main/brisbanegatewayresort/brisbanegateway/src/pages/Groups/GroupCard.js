import React, { useState } from "react";

function GroupCard(props) {
  const categoryName = props.category.category_name;
  const sitesAvailable = props.category.sites_available;
  const maxAdults = props.category.max_adults;
  const maxChildren = props.category.max_children;
  const numSites = props.numSites;
  const numAdults = props.numAdults;
  const numChildren = props.numChildren;
  const sitesLeft = props.sitesLeft;

  return (
    <div>
      <div>
        <p>{categoryName}</p>
        <p>Sites available: {sitesLeft}</p>
        <p>Max adults: {maxAdults}</p>
        <p>Max children: {maxChildren}</p>
        <p>Amount</p>
        <button onClick={props.increaseSite}>+</button>
        <p>{numSites}</p>
        <button onClick={props.decreaseSite}>-</button>
        <br />
      </div>
      <div>
        <p>Adults</p>
        <button name="adults" onClick={props.increaseGuests}>
          +
        </button>
        <p>{numAdults}</p>
        <button name="adults" onClick={props.decreaseGuests}>
          -
        </button>
      </div>
      <div>
        <p>Children</p>
        <button name="children" onClick={props.increaseGuests}>
          +
        </button>
        <p>{numChildren}</p>
        <button name="children" onClick={props.decreaseGuests}>
          -
        </button>
      </div>
      <button onClick={props.addSite}>Add</button>
      <hr />
    </div>
  );
}

export default GroupCard;
