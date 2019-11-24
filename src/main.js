import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './Doctor-Service.js';
import { cardElement } from './outputElement.js';

$(document).ready(function(){
  $('form#issueForm').submit(function(event){
    event.preventDefault();
    const issue = $('#issueInput').val();

    (async () => {
      let doctorService = new DoctorService();
      const doctorsIssueList = await doctorService.getIssueDoctors(issue);

      cardElement(doctorsIssueList);
    })();
  });



  $('#nameButton').click(function() {
    // event.preventDefault();
    const inputLast = $('#inputLastName').val();
    console.log(inputLast);

    (async () => {
      console.log("hi");
      let doctorServiceb = new DoctorService();
      const doctorsNameList = await doctorServiceb.getNameDoctors(inputLast);

      cardElement(doctorsNameList);
    });
  }

);
});
