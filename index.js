async function autoVote(interval = 2000) {
    return setInterval(async () => {
        var now = new Date();
        console.log(now.getMinutes(), now.getSeconds());
        if (now.getMinutes() == 0 && now.getSeconds() < 5) {
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
