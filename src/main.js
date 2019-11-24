import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './Doctor-Service.js';
import { DoctorNameService } from './DoctorName-Service.js';
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
      let doctorNameService = new DoctorNameService();
      const doctorsNameList = await doctorNameService.getNameDoctors(inputLast);

      cardElement(doctorsNameList);
    })();
  }

);
});
