class Car extends Component {
    // super({
    //     id,
    //     plate,
    //     manufacture,
    //     model,
    //     image,
    //     rentPerDay,
    //     capacity,
    //     description,
    //     transmission,
    //     available,
    //     type,
    //     year,
    //     options,
    //     specs,
    //     availableAt,
    // })
}
// alert()
fetch('/data/cars.json')
  .then(function(response) {
      response.json().then(result => {
        Component.init(result)
      })
    // return response.json();
  })
  .then(function(jsonResponse) {
    // do something with jsonResponse
  });