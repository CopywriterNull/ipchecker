import express from 'express';
import requestIp from 'request-ip';

const app = express();
const port = process.env.PORT || 3000;

app.use(requestIp.mw());

app.get('/ip', (req, res) => {
    let clientIp = requestIp.getClientIp(req);

    const response = {
        ip: clientIp
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

