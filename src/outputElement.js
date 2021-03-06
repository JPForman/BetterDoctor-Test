import $ from 'jquery';


export function cardElement(doctorsList) {
  if (doctorsList.data.length === 0) {
    $('#docOutput').append(`<div class='doctorCard'>
    <p>Sorry, this search returned zero results.</p>`);
  } else {
    for (let i=0; i<doctorsList.data.length; i++) {
      if (doctorsList.data[i].practices[0].accepts_new_patients === 'false') {
        var patients = "Sorry, this physician is not currently accepting patients.";
      } else {
        patients = "This physician is currently accepting patients.";
      }
      $('#docOutput').append(`<div class='doctorCard'>
      <p>${doctorsList.data[i].practices[0].name}</p>
      <p>${doctorsList.data[i].practices[0].visit_address.street}, ${doctorsList.data[i].practices[0].visit_address.street2}</p>
      <p>${doctorsList.data[i].practices[0].visit_address.city}, ${doctorsList.data[i].practices[0].visit_address.state}, ${doctorsList.data[i].practices[0].visit_address.zip}</p>
      <p>${doctorsList.data[i].practices[0].phones[0].number}</p>
      <p>${doctorsList.data[i].practices[0].website}</p>
      <p>${patients}</p>
      </div>`
    );
    }
  }
}
