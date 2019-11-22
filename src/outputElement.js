
export class OutputElement {


  outputElement(doctorsList) {
    for (let i=0; i<10; i++) {
      $('#fullName').append(doctorsList.data[i].practices[0].name);
      $('#street').append(doctorsList.data[i].practices[0].visit_address.street);
      $('#street2').append(doctorsList.data[i].practices[0].visit_address.street2);
      $('#zip').append(doctorsList.data[i].practices[0].visit_address.zip);
      $('#city').append(doctorsList.data[i].practices[0].visit_address.city);
      $('#state').append(doctorsList.data[i].practices[0].visit_address.state);
      $('#phoneNumber').append(doctorsList.data[i].practices[0].phones[0].number);
      $('#website').append(doctorsList.data[i].practices[0].website);
      // $('#newPatients').text(doctorsList.data[0].profile.last_name);
      if (doctorsList.data[i].practices[i].accepts_new_patients === true) {
        $('#newPatients').append("This doctor is currently accepting new patients.");
      } else if (doctorsList.data[i].practices[i].accepts_new_patients === false) {
        $('#newPatients').append("Sorry, this doctor is not currently accepting new patients.");
      } else {
        $('#newPatients').append("Sorry, something unexpected happened.");
      }
    }
  }
}
