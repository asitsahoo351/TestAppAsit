const app  = new Weather('Novinki','RU');
app.getWeather(function(){
  var PrevHour = new Date()
  var NextHour = new Date()
  PrevHour.setHours(PrevHour.getHours()-3)
  NextHour.setHours(NextHour.getHours()+3)
  PrevHour = PrevHour.getTime()/1000
  NextHour = NextHour.getTime()/1000
  app.weather.list.forEach(function(y){
  console.log(y.dt_txt, y.dt, NextHour, PrevHour)
  if(y.dt <= NextHour && y.dt >= PrevHour)
      console.log(y)
  })
})

// app.weather.list[0].dt
// app.weather.list[0].dt_txt


// var x = new Date()
// console.log(x)
