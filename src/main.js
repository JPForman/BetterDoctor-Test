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
    $('.doctorsOutput').show();
    $('.docSearch').hide();
    const issue = $('#issueInput').val();

    (async () => {
      let doctorService = new DoctorService();
      const doctorsIssueList = await doctorService.getIssueDoctors(issue);

      cardElement(doctorsIssueList);
    })();
  });



  $('#nameButton').click(function() {
    const inputLast = $('#inputLastName').val();
    $('.doctorsOutput').show();
    $('.docSearch').hide();


    (async () => {
      let doctorNameService = new DoctorNameService();
      const doctorsNameList = await doctorNameService.getNameDoctors(inputLast);

      cardElement(doctorsNameList);
    })();
  }

);
});
