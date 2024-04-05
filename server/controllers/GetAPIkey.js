const APIKEY= process.env.SECERET_API_KEY;

const GetAPIKEY = async (req,res)=>{
 try {
 APIKEY && res.send(APIKEY);

    
 } catch (error) {
    console.log(error.message);
 }
}

module.exports = GetAPIKEY