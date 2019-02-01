const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const massive = require( 'massive');
require( 'dotenv' ).config();


const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log(err)
});

app.use( bodyParser.json() );

app.get('/api/houses/', (req, res) => {
    req.app.get( 'db' ).get_houses().then( response => {
        res.status(200).send( response );
        console.log(response);
    }).catch( (err) => { console.log(err)});
} );

// app.post( '/api/houses', (req, res) => {
//     req.app.post( 'db' )
// });

// app.update
// app.delete


const port = process.env.SERVER_PORT;
app.listen( port, () => { console.log( `Listening on port ${port}.` ); });
