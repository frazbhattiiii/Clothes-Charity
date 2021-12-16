export default function validateReceiveForm({ name,address,city, email,demand,description}) {
	if (!name.trim()) {
		return 'Username required';
	}
  if(!address.trim()){
    return 'Address Required';
  }
	if(!description.trim()){
    return 'Please Enter the description of your receiving';
  }
	if(!demand.trim()){
    return 'Kindly Enter the demand of the item required';
  }

 
  
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 
    if(!city.trim()){
      return 'City name Required';
    }
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	
	return null;
}