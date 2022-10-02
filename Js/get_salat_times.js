/*
simple salat time applicatin by Hussin Tsouli 
*/

export function getSalat(City) {

    let Base_url = "https://prayerstime.hussin22.repl.co/api/"+City;

    const GetData = (link) => {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.onload = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(Error("data Not Found"));
                }
            };
            req.open("GET", link);
            req.send();
        });
    };
    GetData(Base_url).then((data) => {
        //array with today Prayer Times
        let   Today_prayers = [data.today.Fajr, data.today.Dhuhr, data.today.Asr, data.today.Maghrib, data.today["Isha'a"]];
        //array with Tomorrow Prayer Times
        let Tomorrow_prayers = [data.tomorrow.Fajr, data.tomorrow.Dhuhr, data.tomorrow.Asr, data.tomorrow.Maghrib, data.tomorrow["Isha'a"]];
       //get html tags for today prayer time
        let today_times = $('.Today_Prayers li h4');
        //get html tags for tomorrow prayer time
        let Tomorrow_times = $('.Tomorrow_Prayers li h4');
        for (let i = 0; i < today_times.length; i++) {
            today_times[i].innerText = Today_prayers[i]
            Tomorrow_times[i].innerText = Tomorrow_prayers[i]

        }
    })

}
