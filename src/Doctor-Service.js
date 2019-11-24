export class DoctorService {
  async getIssueDoctors(issue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      //add error message to user here
      $("#docOutput").text("Sorry, there was an error handling your request. " + error.message);
      console.error("There was an error handling your request: " + error.message);
    }
  }

  async getNameDoctors(inputLast) {
    console.log("api");
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${inputLast}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      //add error message to user here
      $("#docOutput").text("Sorry, there was an error handling your request. " + error.message);
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
