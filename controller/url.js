const shortid = require("shortid");
const URL = require('../models/url');

async function handleganrateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : 'URL is required'});
    const shortID = shortid();

    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory :[]
    });

    return res.json({id : shortID})
}

async function handleRedirectShortUrl(req,res){
    const shortId = req.params.shortId;
    const url = await URL.findOneAndUpdate(
        {
            shortId: shortId,
        },
        {
            $push: {
                visitHistory:{ 
                    timestemp : Date.now(),
                }
            }
        },
    );
    res.redirect(url.redirectURL);
}

async function handeleAnalysis(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks : result.visitHistory.length , 
        analysis : result.visitHistory,
    });
}
module.exports = {
    handleganrateNewShortUrl,
    handleRedirectShortUrl,
    handeleAnalysis,
}