namespace myapp.Controllers {

    export class HomeController {
        public cars;

        constructor(private $http: ng.IHttpService) {
          this.$http.get('/api/cars')
            .then((response) => {
              this.cars = response.data;
            })

            .catch((response) => {
              console.error('Car not found; try again.');
            });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
