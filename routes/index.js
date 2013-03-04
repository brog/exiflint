var ExifImage = require('exif').ExifImage;

function image(){
    image_url = "http://127.0.0.1:3030/images/4765114690_d5e47ddbf8_o.jpg";
    return image_url;
    /*try {
        new ExifImage({ image : image_url }, function (error, image) {
            if (error){
                console.log('Error 1: '+error.message);
                return {image : "none"};

            }else{

                //res.json(200, image);
                //res.send( 'image 3\n' + JSON.stringify(image, null, 4) );
                console.log(image); // Do something with your data!
                return image;
            }
        });
    } catch (error) {

        console.log('Error 2: ' + error);
    }
    */
}



exports.main = function(req, res){
  res.render('main',{ title: 'EXIF Lint main' } );
};

exports.exif = function(req,res){
    res.render('exif', {title : 'Exif Lint image', image: image() });
};



//exports.main = require('./main.js')
//exports.exif = require('./exif.js');




//exports.index = function(req, res){
//  res.render('index', { title: 'EXIF Lint' } );
//};

