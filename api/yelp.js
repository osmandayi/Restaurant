import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/",
    headers: {
        Authorization: 'Bearer orI1JZS4Mk-PbusmhxLasjt7MYgs8fimETMgntb7k6C2OtCS8kwQZT8ONuMocbRT33LyRGM9pI4C2Eo_KR-w2Ndfozq-UD0vGKzoF_FWF4VPsLeALnjRh42IFki6ZXYx',
    },
})