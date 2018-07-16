class Weather {
  constructor(){
    this.key='1fe20da2b00e086daf5a0b33d016f764'
    this.name=null;
    this.country=null;
    this.cityLists = null;
    this.id=null;
    this.prepareLists()
  }

  async prepareLists(){
    fetch('city.list.json')
    .then(res => {        
      return res.json();
    })
    .then(data => {
      this.cityLists = data
    })
    .catch(err => console.log(err));
  }

  async getWeather(name, country){
    this.name = name
    this.country = country
    var isFound = false;
    this.cityLists.forEach(result => {
      if(result.name == this.name && result.country == this.country && !isFound){
        this.id =  result.id
        isFound = true
        this.fetchWeahter()
      }
    })
    if(isFound == false)
      console.log("No city/country found")
  }

  async fetchWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.id}&APPID=${this.key} `);
    const result = await response.json();
    console.log(result)
  }
}