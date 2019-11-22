import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $('form#issueForm').submit(function(event){
    event.preventDefault();
    let issue = $('#issueInput').val();


  })

  (async () => {
    let doctorService = new DoctorService();
    const response = await doctorService.getDoctors(issue);
    // getElements(response);
  })();

})
