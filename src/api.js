const base_url=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`;

const currentDate=new Date().toISOString().slice(0,10);
const currentYear=parseInt(currentDate.slice(0,4));

export const popularGames=`${base_url}&dates=${currentYear-1},${currentDate}&ordering=-rating&page_size=10`;
export const upcomingGames=`${base_url}&dates=${currentDate},${currentYear+1}&ordering=-added&page_size=10`;
export const newGames=`${base_url}&dates=${currentYear-1},${currentDate}&ordering=-released&page_size=10`;