export const UseRequest = () => {

    const get = async(url) => {
        let response = await fetch(url);
        let result = await response.json();
        if(result) {
            console.log(response);
            
        }
        return result
    }




    return {get}
}