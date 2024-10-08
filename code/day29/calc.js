export default (req, res)=>{
    res.send(JSON.stringify({...req.body, ...req.params ,test:"message"}));
}