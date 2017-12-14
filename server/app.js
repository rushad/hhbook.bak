import express from 'express';

import publicRoute from './public';

const app = express();
app.set('x-powered-by', false);

app.use('/public', publicRoute);

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head />
            <body>
                <div>
                    <a href="/auth/google">Sign In with Google</a>
                </div>
                <div>
                    <a href="/auth/facebook">Sign In with Facebook</a>
                </div>
            </body>
        </html>
    `);
});

module.exports = app;