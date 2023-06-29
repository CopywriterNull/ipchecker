import express from 'express';
import requestIp from 'request-ip';
import IP2Location from 'ip2location-nodejs';

let ip2location = new IP2Location("IP2LOCATION-LITE-DB1.BIN");

const app = express();
const port = process.env.PORT || 3000;

app.use(requestIp.mw());

app.get('/ip', (req, res) => {
    let clientIp = requestIp.getClientIp(req);
    let geolocation = ip2location.getAll(clientIp);

    const response = {
        ip: clientIp,
        isInUS: geolocation.country_short === "US" ? "yes" : "no"
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
