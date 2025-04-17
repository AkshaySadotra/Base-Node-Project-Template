const info =(req, res)=>{
    res.json({
        success:true,
        message:'API is live',
        error:{},
        data:{}
    })
}

module.exports = {
    info
}