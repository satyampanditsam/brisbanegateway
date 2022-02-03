import React, { useState, useEffect } from "react";
import GroupCard from "./GroupCard";

function GroupCards(props) {
  //NEED TO DO/CHECK GUESTS MAX
  const [siteData, setSiteData] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookingCart, setBookingCart] = useState([]);
  const [bookingTotal, setBookingTotal] = useState(0);
  const [sitesTotal, setSitesTotal] = useState(0);
  const [adultsTotal, setAdultsTotal] = useState(0);
  const [childrenTotal, setChildrenTotal] = useState(0);
  const [guestsTotal, setGuestsTotal] = useState(0);
  const [sitesAdded, setSitesAdded] = useState([]);
  const [adultsAdded, setAdultsAdded] = useState([]);
  const [childrenAdded, setChildrenAdded] = useState([]);
  const [numSites, setNumSites] = useState([]);
  const [numAdults, setNumAdults] = useState([]);
  const [numChildren, setNumChildren] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");

  function checkAvailability() {
    const payLoad = { check_in: checkIn, check_out: checkOut };
    fetch("http://localhost:9000/site-data/", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => setSiteData(data.site_data));
  }

  //Update booking cart total
  useEffect(() => {
    let tariffTotal = 0;
    let sitesTotal = 0;
    let adultsTotal = 0;
    let childrenTotal = 0;
    let guestsTotal;
    for (let i = 0; i < bookingCart.length; i++) {
      sitesTotal += bookingCart[i].sites;
      tariffTotal += bookingCart[i].tariff;
      adultsTotal += bookingCart[i].adults * bookingCart[i].sites;
      childrenTotal += bookingCart[i].children * bookingCart[i].sites;
    }
    guestsTotal = adultsTotal + childrenTotal;
    setBookingTotal(tariffTotal);
    setSitesTotal(sitesTotal);
    setAdultsTotal(adultsTotal);
    setChildrenTotal(childrenTotal);
    setGuestsTotal(guestsTotal);
  }, [bookingCart]);

  useEffect(() => {
    if (siteData.length > 0) {
      const sitesAddedInit = [];
      const guestsAddedInit = [];
      const adultsAddedInit = [];
      const childrenAddedInit = [];

      const numSitesInit = [];
      const numAdultsInit = [];
      const numChildrenInit = [];

      for (let i = 0; i < siteData.length; i++) {
        sitesAddedInit.push(0);
        guestsAddedInit.push(0);
        adultsAddedInit.push(0);
        childrenAddedInit.push(0);

        numSitesInit.push(1);
        numAdultsInit.push(1);
        numChildrenInit.push(0);
      }
      setSitesAdded(sitesAddedInit);
      setAdultsAdded(adultsAddedInit);
      setChildrenAdded(childrenAddedInit);

      setNumSites(numSitesInit);
      setNumAdults(numAdultsInit);
      setNumChildren(numChildrenInit);
    }
  }, [siteData]);

  function increaseSite(index) {
    if (
      numSites[index] + sitesAdded[index] >=
      siteData[index].sites_available
    ) {
      return;
    }
    const numSitesCopy = [...numSites];
    numSitesCopy[index]++;
    setNumSites(numSitesCopy);
  }

  function decreaseSite(index) {
    console.log(numSites);
    if (numSites[index] <= 1) {
      return;
    }
    const numSitesCopy = [...numSites];
    numSitesCopy[index]--;
    setNumSites(numSitesCopy);
  }

  function increaseGuests(event, index) {
    if (
      numAdults[index] + numChildren[index] >=
      siteData[index].category_max_combined
    ) {
      return;
    }
    if (event.target.name == "adults") {
      if (sitesAdded[index] >= siteData[index].sites_available) {
        return;
      }
      if (numAdults[index] >= siteData[index].max_adults) {
        return;
      }
      const numAdultsCopy = [...numAdults];
      numAdultsCopy[index]++;
      setNumAdults(numAdultsCopy);
    }
    if (event.target.name == "children") {
      if (sitesAdded[index] >= siteData[index].sites_available) {
        return;
      }
      if (numChildren[index] >= siteData[index].max_children) {
        return;
      }
      const numChildrenCopy = [...numChildren];
      numChildrenCopy[index]++;
      setNumChildren(numChildrenCopy);
    }
  }

  function decreaseGuests(event, index) {
    if (event.target.name == "adults" && numAdults[index] > 1) {
      const adultsAddedCopy = [...adultsAdded];
      adultsAddedCopy[index]--;
      setAdultsAdded(adultsAddedCopy);
      const numAdultsCopy = [...numAdults];
      numAdultsCopy[index]--;
      setNumAdults(numAdultsCopy);
    }
    if (event.target.name == "children" && numChildren[index]) {
      const childrenAddedCopy = [...childrenAdded];
      childrenAddedCopy[index]--;
      setChildrenAdded(childrenAddedCopy);
      const numChildrenCopy = [...numChildren];
      numChildrenCopy[index]--;
      setNumChildren(numChildrenCopy);
    }
  }

  function addSite(index, categoryId) {
    //Increase sites amount by amount selected
    if (sitesAdded[index] >= siteData[index].sites_available) {
      return;
    }
    const sitesAddedCopy = [...sitesAdded];
    sitesAddedCopy[index] += numSites[index];
    setSitesAdded(sitesAddedCopy);
    //If booking cart contains same booking with same guest amounts
    //increase amount of existing booking accordingly
    let bookingCartCopy;
    let bookingCopy;
    let bookingMatch = false;
    for (let i = 0; i < bookingCart.length; i++) {
      if (
        bookingCart[i].category_id == categoryId &&
        bookingCart[i].adults == numAdults[index] &&
        bookingCart[i].children == numChildren[index]
      ) {
        bookingCartCopy = [...bookingCart];
        bookingCopy = { ...bookingCartCopy[i] };
        bookingCopy.sites = bookingCopy.sites + numSites[index];
        bookingCopy.tariff += siteData[index].tariff_total * sitesAdded[index];
        bookingCartCopy[i] = bookingCopy;
        setBookingCart(bookingCartCopy);
        bookingMatch = true;
      }
    }

    if (!bookingMatch) {
      setBookingCart([
        ...bookingCart,
        {
          category_index: index,
          category_id: categoryId,
          category_name: siteData[index].category_name,
          sites: numSites[index],
          adults: numAdults[index],
          children: numChildren[index],

          tariff: siteData[index].tariff_total * numSites[index],
        },
      ]);
    }

    if (
      sitesAdded[index] + numSites[index] >=
      siteData[index].sites_available
    ) {
      const numSitesCopy = [...numSites];
      numSitesCopy[index] = 0;
      setNumSites(numSitesCopy);
      const numAdultsCopy = [...numAdults];
      numAdultsCopy[index] = 0;
      setNumAdults(numAdultsCopy);
      const numChildrenCopy = [...numChildren];
      numChildrenCopy[index] = 0;
      setNumChildren(numChildrenCopy);
    }
  }

  function removeSite(booking, index) {
    const categoryIndex = booking.category_index;
    //Descrease sites added for category
    const sitesAddedCopy = [...sitesAdded];
    sitesAddedCopy[categoryIndex] -= booking.sites;
    setSitesAdded(sitesAddedCopy);
    if (!numSites[categoryIndex]) {
      const numSitesCopy = [...numSites];
      numSitesCopy[categoryIndex] = 1;
      setNumSites(numSitesCopy);
      const numAdultsCopy = [...numAdults];
      numAdultsCopy[categoryIndex] = 1;
      setNumAdults(numAdultsCopy);
    }
    const bookingCartCopy = [...bookingCart];
    bookingCartCopy.splice(index, 1);
    setBookingCart(bookingCartCopy);
  }

  function sendGroupInquiry() {
    const payLoad = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      booking_cart: bookingCart,
    };
    fetch("http://localhost:9000/group-booking", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div>
      <div>
        <p>Check in</p>
        <input
          type="text"
          placeholder="dd/mm/yy"
          value={checkIn}
          onChange={(event) => setCheckIn(event.target.value)}
        />
        <p>Check out</p>
        <input
          type="text"
          placeholder="dd/mm/yy"
          value={checkOut}
          onChange={(event) => setCheckOut(event.target.value)}
        />
        <button onClick={checkAvailability}>Check availability</button>
      </div>
      <div>
        <hr />
        <h3>Your Cart</h3>
        {bookingCart.length ? (
          <div>
            {bookingCart.map((booking, index) => {
              return (
                <div>
                  <p>{booking.category_name}</p>
                  <p>{booking.sites}x</p>
                  <p>
                    {booking.adults} adult{booking.adults != 1 ? "s" : ""}
                  </p>
                  <p>
                    {booking.children}{" "}
                    {booking.children != 1 ? "children" : "child"}
                  </p>

                  <p>${booking.tariff}</p>
                  <button onClick={() => removeSite(booking, index)}>
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>Empty</p>
          </div>
        )}
        {bookingCart.length ? (
          <div>
            <p>Total accommodations: {sitesTotal}</p>
            <p>Total adults: {adultsTotal}</p>
            <p>Total children: {childrenTotal}</p>
            <p>Total guests: {guestsTotal}</p>
            <p>Total amount: ${bookingTotal} including GST</p>
            <h3>Contact Information</h3>
            <input
              type="text"
              placeholder="Group name"
              value={groupName}
              onChange={(event) => setGroupName(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <br />
            <button onClick={sendGroupInquiry}>Send Inquiry</button>
          </div>
        ) : (
          <></>
        )}
        <hr />
      </div>

      {siteData ? (
        <div>
          <h3>Available</h3>
          {siteData.map((category, index) => {
            return (
              <GroupCard
                category={category}
                increaseSite={() => increaseSite(index)}
                decreaseSite={() => decreaseSite(index)}
                increaseGuests={(event) => increaseGuests(event, index)}
                decreaseGuests={(event) => decreaseGuests(event, index)}
                addSite={() => {
                  addSite(index, category.category_id);
                }}
                numSites={numSites[index]}
                sitesAdded={sitesAdded[index]}
                sitesLeft={
                  siteData[index].category_max_combined - sitesAdded[index]
                }
                numAdults={numAdults[index]}
                numChildren={numChildren[index]}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GroupCards;
