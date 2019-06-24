

// creates a contact object
function Contact(first_name, second_name, phone_number, email, address) {
    this.firstname = first_name;
    this.secondname = second_name;
    this.phone = phone_number;
    this.email = email;
    this.address =address
};

// create an array to store the contacts
var contacts = [];

// get the input from the form and save it to contacts array
var saveContact = (e) => {
    e.preventDefault()
    console.log("this was c")
	var first_name = document.querySelector('[name="first_name"]').value;
    var second_name = document.querySelector('[name="second_name"]').value;
    var phone_number = document.querySelector('[name="phone_number"]').value;
    var email = document.querySelector('[name="email"]').value;
    var address = document.querySelector('[name="address"]').value;
    
	// create a contact object using the constructor
    var new_contact = new Contact(first_name,second_name, phone_number,email,address);
    console.log(`Contact ${contacts} to be saved!`);
	// save the contact
	contacts.push(new_contact);
	// print the array of contacts
	console.log(`Contact ${new_contact} saved!`);
};


var searchContacts = (e) => {
    e.preventDefault()
    console.log("this was c")
    
	// clear the element
	document.getElementById("result").innerHTML = "";
	// get search querry from the form
	var search_phrase = document.querySelector('[name="search"]').value;
	// loop through indexes of elements in the contacts array
	for (i = 0; i < contacts.length; i++) {
		// get the contact at that index
		contact = contacts[i];
		// get the first name of that contact
        let first_name = contact.firstname;
        let second_name = contact.secondname;
        let phone_number = contact.phonenumber;
        let email = contact.email;
        let address = contact.address;
        
		// if the name includes what the user is serching for, 
		if (first_name.includes(search_phrase)) {
		// print the name
		console.log(first_name, " found!") 
		// return the contact info to the page
		var ptag = document.createElement("p");
		var node = document.createTextNode(first_name + ": "+ phone_number);
		ptag.appendChild(node);
		var element = document.getElementById("result");
		element.appendChild(ptag);
        } else {
            // else, return an error message
            console.log("Not found!")
        }
	};
};
