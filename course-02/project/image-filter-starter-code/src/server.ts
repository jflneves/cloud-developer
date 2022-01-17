import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get( "/filteredimage", async ( req, res ) => {
      // return type is string | string[] | ParsedQs | ParsedQs[] so we keep it any until we verify is not null
      let imageUrl : any = req.query.image_url;
      if(imageUrl == null) {
        res.status(422).send("Query parameter 'image_url' must not be null");
        return;
      }
      let filePath : string
      try {
        filePath  = await filterImageFromURL(imageUrl.toString())
      } catch (error) {
        res.status(400).send("Failed to process url image. Must be valid image url")
        return;
      }
      res.sendFile(filePath)
      res.addListener("close", () => {
        deleteLocalFiles([filePath])
      })
    } 
  );

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();