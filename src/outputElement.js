import $ from 'jquery';
// import { DoctorService } from './Doctor-Service.js';

export function cardElement(doctorsList) {
  console.log("api");
  for (let i=0; i<10; i++) {
    $('#docOutput').append(`<div class='card'>
    <p>${doctorsList.data[i].practices[0].name});</p>
    <p>${doctorsList.data[i].practices[0].visit_address.street}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.street2}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.zip}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.city}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.state}</p>
    <p>${doctorsList.data[i].practices[0].visit_address.number}</p>
    <p>${doctorsList.data[i].practices[0].website}</p>

    </div>`
    );
  }
}
