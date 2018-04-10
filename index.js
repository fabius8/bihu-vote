async function autoVote(interval = 60000) {

    return setInterval(async () => {
        const articles = await fetchFollowArticles();
        for (let i = 0; i <  articles.length; ++ i) {
            article = articles[i];
            if (!article.up && article.ups < 50) {
                console.table(article);
                vote(article.id);
            }
        }
    }, interval)
}

autoVote();
