import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

(async () => {
  let doctorService = new DoctorService();
  const response = await doctorService.getDoctors();
  // getElements(response);
})();
