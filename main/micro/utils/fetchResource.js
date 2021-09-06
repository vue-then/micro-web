export const fetchResource = (url) => {
    //return new Promise((resolve,rejection) => {
        fetch(url).then(async (res) => {
			await res.text();
		}).catch(e => {
            console.log(e,'e');
        });
    //})
    
}