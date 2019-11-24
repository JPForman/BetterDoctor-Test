import $ from 'jquery';

export function cardElement(doctorsList) {
  for (let i=0; i<doctorsList.data.length; i++) {
    $('#docOutput').append(`<div class='doctorCard'>
    <p>${doctorsList.data[i].practices[0].name});</p>
    <p>${doctorsList.data[i].practices[0].visit_address.street}, ${doctorsList.data[i].practices[0].visit_address.street2}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.city}, ${doctorsList.data[i].practices[0].visit_address.state}, ${doctorsList.data[i].practices[0].visit_address.zip}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.number}</p>
    <p>${doctorsList.data[i].practices[0].website}</p>

    </div>`
    );
  }
}
