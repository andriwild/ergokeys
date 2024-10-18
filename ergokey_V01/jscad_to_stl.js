// const stlSerializer = require('@jscad/stl-serializer');
// const rawData = stlSerializer.serialize({binary: true}, geometry) //in browser (with browserify etc)

// const blob = new Blob("out.stl")


const fs = require('fs');
const stlSerializer = require('@jscad/stl-serializer');
 
// Serialize geometry to binary STL data
const rawData = stlSerializer.serialize({ binary: true }, "./);
 
// Create a Buffer from the rawData (an array of ArrayBuffers or Uint8Arrays)
const buffer = Buffer.from(Uint8Array.from(rawData).buffer);
 
// Write the Buffer to a file (model.stl)
fs.writeFile('model.stl', buffer, (err) => {
  if (err) throw err;
  console.log('STL file has been saved as model.stl');
});
