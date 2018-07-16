class Weather {
  constructor(name, country, id){

    if(typeof id !== "undefined")
      this.id=null;
    else
      this.id=id;
  
    this.name=name;
    this.country=country;
    this.key='1fe20da2b00e086daf5a0b33d016f764'
    this.weather=null
  }

  getWeather(callback){
    fetch('city.list.json')
      .then(res => {        
        return res.json();
      })
      .then(data => {
        let isFound = false;
        data.forEach(result => {
          if(result.name == this.name && result.country == this.country && !isFound){
            this.id =  result.id
            isFound = true
            this.fetchWeahter().then(data=>{
              this.weather = data
              callback();
            });
          }
          return this.weather;
        })
      })
      .catch(err => console.log(err));

    // console.log(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&forecast?id=524901&APPID=${this.key}`);
    // return result;
  }

  async fetchWeahter(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.id}&APPID=${this.key} `);
    const result = await response.json();
    return result
    // console.log(result)
    // return result
  }
}