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
      $('#firstName').text(doctorsList.data[0].profile.first_name);
    }

  })
})
