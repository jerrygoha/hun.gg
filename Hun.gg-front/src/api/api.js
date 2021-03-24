import api from '../commons/apiUtil';

export const getSummonerInfo = (summonerName) => {
   return api.get(`/hun-gg/summoner/summonerInfo/by-name/summonerName=${summonerName}`);
};

export const getSummonerGameList = (accountId) => {
   return api.get(`/hun-gg/summoner/gameList/by-account/${accountId}`);
};

export const getSummonerLeagueInfo = (encryptedSummonerId) => {
   return api.get(`/hun-gg/summoner/leagueInfo/by-summoner/${encryptedSummonerId}`);
};

export const getRecentChampion = (accountId,summonerName) => {
   return api.get(`/hun-gg/summoner/championInfo/by-account/${accountId}/${summonerName}`);
};

export const getDetailGameList = (accountId,summonerName,endIndex = 10) => {
   return api.get(`/hun-gg/summoner/detailGameInfo/by-account/${accountId}/${summonerName}/${endIndex}`)
}

export const getChampionInfo = () => {
   return api.get(`http://ddragon.leagueoflegends.com/cdn/10.1.1/data/ko_KR/champion.json`);
};

