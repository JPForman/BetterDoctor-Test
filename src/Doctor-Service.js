export class DoctorService {
  async getDoctors(art) {
    try {
      let response = await fetch(`https://api.harvardartmuseums.org/image?apikey=${process.env.API_KEY}&size=3&sort=random&baseimageurl`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      //add error message to user here
      console.error("There was an error handling your request: " + error.message);


    }
  }
}
