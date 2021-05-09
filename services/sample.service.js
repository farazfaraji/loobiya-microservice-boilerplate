async function insertIntoSample(data) {
    const reportsModel = ((this.postgres || {}).models || {}).reports || null;
    if (reportsModel) {
        await reportsModel.create({
            team_id: teamId,
            team_domain: teamDomain,
            channel_name: channelName,
            user_id: userId,
            username,
            running_score: runningScore,
            biking_score: bikingScore,
        });
        return await this.getLeaderBoardByUsername(username)
    }
    return false;
}