const controleRegex = [/^[\wéèàêûçàôëîï]{2}[\w\s-'îïéèàêûñçàôë]{0,48}$/i,
                    /^[\wéèàêûçàôëîï]{2}[\w\s-'éèàêîïûçñàôë]{0,40}$/i,
                    /^[\wéèàêûçàôëîï]{2}[\w\s-éèàêûçàñôëîï,?;.!:/"'()]{0,1098}$/i,
                    /^[a-zA-Zîïéèàêûçàôë]{2}[a-zA-Z\s-'îïéèàêñûçàôë]{0,48}$/i,
                    /^([1-9]|10)$/];

module.exports = (req,res,next) => {
    let compteur = 0;
    if(req.body.sauce) {
        sauceObjet = JSON.parse(req.body.sauce);
    } else {
        sauceObjet = { ...req.body };
    }
    for (const key in sauceObjet) {
        if (sauceObjet.hasOwnProperty(key)&&compteur<5) {
            if(!controleRegex[compteur].test(sauceObjet[key])) {
                req.body.errorMessage = "Le champ "+key+ " ne semble pas valide !";  
                next();
            }  
        }
        compteur++;    
    }
    next();
}  