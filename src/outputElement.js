import $ from 'jquery';
import { DoctorService } from './Doctor-Service.js';


export function cardElement(doctorsList) {
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



//
// export class OutputElement {
  //   constructor(doctorsList) {
    //     this.fullName = doctorsList.data[0].practices[0].name;
    //   }
    //
    //   docCard(doctorsList) {
      //     $('#docOutput').append.html(`<p>${doctorsList.data[0].practices[0].name}</p>`);
      //   }
      //
      // }
      //
      // export function outputElement(doctorsList) {
        //   for (let i=0; i<10; i++) {
          //     $('#startPoint').html(`<div id='card${i}' class='jumbotron'>`);
          //     $('#fullName').html(`<p>${doctorsList.data[i].practices[0].name}</p>`);
          //     $('#street').html(doctorsList.data[i].practices[0].visit_address.street);
          //     $('#street2').html(doctorsList.data[i].practices[0].visit_address.street2);
          //     $('#zip').html(doctorsList.data[i].practices[0].visit_address.zip);
          //     $('#city').html(doctorsList.data[i].practices[0].visit_address.city);
          //     $('#state').html(doctorsList.data[i].practices[0].visit_address.state);
          //     $('#phoneNumber').html(doctorsList.data[i].practices[0].phones[0].number);
          //     $('#website').html(doctorsList.data[i].practices[0].website);
          //     if (doctorsList.data[i].practices[0].accepts_new_patients === true) {
            //       $('#newPatients').html("This doctor is currently accepting new patients.");
            //     } else if (doctorsList.data[i].practices[0].accepts_new_patients === false) {
              //       $('#newPatients').html("Sorry, this doctor is not currently accepting new patients.");
              //     } else {
                //       $('#newPatients').html("Sorry, something unexpected happened.");
                //     }
                //     $('#endPoint').html(`</div>`);
                //     return true;
                //   }
                // }
