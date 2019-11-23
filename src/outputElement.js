import $ from 'jquery';
import { DoctorService } from './Doctor-Service.js'
// export class OutputElement {
  //
  //   constructor(doctorList) {
    //     this.fullName = fullName;
    //     this.street = street;
    //     this.street2 = street2;
    // }
    export function outputElement(doctorsList) {
      for (let i=0; i<10; i++) {
        $('#startPoint').html(`<div id='card${i}' class='jumbotron'>`);
        $('#fullName').html(doctorsList.data[i].practices[0].name);
        $('#street').html(doctorsList.data[i].practices[0].visit_address.street);
        $('#street2').html(doctorsList.data[i].practices[0].visit_address.street2);
        $('#zip').html(doctorsList.data[i].practices[0].visit_address.zip);
        $('#city').html(doctorsList.data[i].practices[0].visit_address.city);
        $('#state').html(doctorsList.data[i].practices[0].visit_address.state);
        $('#phoneNumber').html(doctorsList.data[i].practices[0].phones[0].number);
        $('#website').html(doctorsList.data[i].practices[0].website);
        if (doctorsList.data[i].practices[0].accepts_new_patients === true) {
          $('#newPatients').html("This doctor is currently accepting new patients.");
        } else if (doctorsList.data[i].practices[0].accepts_new_patients === false) {
          $('#newPatients').html("Sorry, this doctor is not currently accepting new patients.");
        } else {
          $('#newPatients').html("Sorry, something unexpected happened.");
        }
        $('#endPoint').html(`</div>`);
        return true;
      }
    }
