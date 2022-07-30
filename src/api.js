const base_url=`https://api.rawg.io/api`;

const currentDate=new Date().toISOString().slice(0,10);
const currentYear=parseInt(currentDate.slice(0,4));

export const popularGames=`${base_url}/games?key=${process.env.REACT_APP_KEY}&dates=${currentYear-1},${currentDate}&ordering=-rating&page_size=10`;
export const upcomingGames=`${base_url}/games?key=${process.env.REACT_APP_KEY}&dates=${currentDate},${currentYear+1}&ordering=-added&page_size=10`;
export const newGames=`${base_url}/games?key=${process.env.REACT_APP_KEY}&dates=${currentYear-1},${currentDate}&ordering=-released&page_size=10`;


//Game Details
export const gameDetailsURL=(gameId)=>(`https://api.rawg.io/api/games/${gameId}.json?&key=${process.env.REACT_APP_KEY}`);
export const SCREENSHOT_URL=(gameId)=>(`https://api.rawg.io/api/games/${gameId}/screenshots?&key=${process.env.REACT_APP_KEY}`);
