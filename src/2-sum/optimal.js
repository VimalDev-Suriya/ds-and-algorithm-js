const addTime = (t1, t2) => {
 const [h1, m1] = t1.split(':').map(Number);
 const [h2, m2] = t2.split(':').map(Number);

 const hours = h1 + h2;
 const carryOverHours = Math.floor((m1 + m2) / 60);
 const remianingMinutes = (m1 + m2) % 60;

 return `${hours + carryOverHours}.${remianingMinutes}`;
}

const strToTime = t1 => {
 const [h,m] = t1.split(":").map(Number);

 return h * 60 + m;
}

const timeToStr = strTime => {
 if(strTime < 0) {
  strTime = -strTime;
 }
 const hours = Math.floor(strTime / 60);
 const min = strTime % 60;

 return `${hours}:${min.toString().padStart(2, 0)}`;
}

const getSongs = (songs, total) => {
 if(!Array.isArray(songs) || !total) return null;

 const pairs = {};

 for(let i=0; i<songs.length; i++){
  const [name, duration] = songs[i];

  const pairDuration = timeToStr(strToTime(`${total.toString().padStart(2, 0)}:00`) - strToTime(duration));

  if(pairs[pairDuration]){
   console.log('pairDuration',pairs[pairDuration], name)
   return
  }

  pairs[duration] = name;
 }

 return []
}

console.log(getSongs([
  ["Stairway to Heaven", "8:05"], ["Immigrant Song", "2:27"],
    ["Rock and Roll", "3:41"], ["Communication Breakdown", "2:29"],
    ["Good Times Bad Times", "2:48"], ["Hot Dog", "3:19"],
    ["The Crunge", "3:18"], ["Achilles Last Stand", "10:26"],
    ["Black Dog", "4:55"]
], 7)); // hot dog and rooc & roll

