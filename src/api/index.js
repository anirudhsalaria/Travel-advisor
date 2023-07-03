import axios from "axios";

export const getPlacesData = async (type,sw, ne) => {
    try {
        const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '7564cc5fa2mshe1ccf4580d12d5dp1ee617jsn1dadedd6cd74',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    } catch(error){
        console.log(error);
    }
}