import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './Doctor-Service.js';

$(document).ready(function(){
  $('form#issueForm').submit(function(event){
    event.preventDefault();
    const issue = $('#issueInput').val();


    (async () => {
      let doctorService = new DoctorService();
      const doctorsList = await doctorService.getDoctors(issue);
      outputElements(doctorsList);
    })();

    function outputElements(doctorsList) {
      $('#fullName').text(doctorsList.data[0].profile.first_name + " " + doctorsList.data[0].profile.last_name);
      $('#street').html(doctorsList.data[0].practices[0].visit_address.street);
      $('#street2').html(doctorsList.data[0].practices[0].visit_address.street2);
      $('#zip').html(doctorsList.data[0].practices[0].visit_address.zip);
      $('#city').html(doctorsList.data[0].practices[0].visit_address.city);
      $('#state').html(doctorsList.data[0].practices[0].visit_address.state);
      $('#phoneNumber').text(doctorsList.data[0].practices[0].phones[0].number);
      $('#website').text(doctorsList.data[0].profile.last_name);
      $('#newPatients').text(doctorsList.data[0].profile.last_name);

    }

  });
});
