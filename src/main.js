import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './Doctor-Service.js';
import { OutputElement } from './outputElement.js';
import { outputElement } from './outputElement.js';

$(document).ready(function(){
  $('form#issueForm').submit(function(event){
    event.preventDefault();
    const issue = $('#issueInput').val();


    (async () => {
      let doctorService = new DoctorService();
      const doctorsList = await doctorService.getDoctors(issue);
      // let output = OutputElement.outputElement(doctorsList);
      let output = outputElement(doctorsList);
    })();
  });
});



// function outputElements(doctorsList) {
  //   $('#fullName').html(doctorsList.data[0].practices[0].name);
  //   $('#street').html(doctorsList.data[0].practices[0].visit_address.street);
  //   $('#street2').html(doctorsList.data[0].practices[0].visit_address.street2);
  //   $('#zip').html(doctorsList.data[0].practices[0].visit_address.zip);
  //   $('#city').html(doctorsList.data[0].practices[0].visit_address.city);
  //   $('#state').html(doctorsList.data[0].practices[0].visit_address.state);
  //   $('#phoneNumber').text(doctorsList.data[0].practices[0].phones[0].number);
  //   $('#website').text(doctorsList.data[0].practices[0].website);
  //   // $('#newPatients').text(doctorsList.data[0].profile.last_name);
  //   if (doctorsList.data[0].practices[0].accepts_new_patients === true) {
    //     $('#newPatients').text("This doctor is currently accepting new patients.");
    //   } else if (doctorsList.data[0].practices[0].accepts_new_patients === false) {
      //     $('#newPatients').text("Sorry, this doctor is not currently accepting new patients.");
      //   } else {
        //     $('#newPatients').text("Sorry, something unexpected happened.");
        //   }
        // }
        //   });
        // });
