async function autoVote(interval = 1000) {
    return setInterval(async () => {
        var now = new Date();
        if ((now.getMinutes() == 0 && now.getSeconds() == 1) &&
            (now.getMinutes() == 0 && now.getSeconds() == 3) &&
            (now.getMinutes() == 30 && now.getSeconds() == 2) &&
            (now.getMinutes() == 30 && now.getSeconds() == 4)){
            const articles = await fetchFollowArticles();
            for (let i = 0; i <  articles.length; ++ i) {
                article = articles[i];
                if (!article.up && article.ups < 100) {
                    console.table(article);
                    vote(article.id);
                }
            }
        }
    }, interval);
}

autoVote();
