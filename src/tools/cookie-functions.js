
const _cookieName = 'ccc-cookie-data';

const _initialCookie = {
    'loggedIn':false,
    'forcedRefresh':false
}

export function setCookie(value, days=7) {
    var expires = "";
    
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    
    document.cookie = _cookieName + "=" + value + expires + "; path=/";
}

export function getCookie() {

    // Split the cookies by semicolon
    const cookies = document.cookie.split(';');
  
    // Iterate through the cookies
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      // Check if the cookie starts with the specified name
      if (cookie.startsWith(_cookieName + '=')) {
        // Extract and return the cookie value
        return cookie.substring(_cookieName.length + 1);
      }
    }
  
    // Return null if the cookie is not found
    return null;
}


export async function getFormatedData() {
    const data = getCookie();
    
    return await JSON.parse(data)
}


export async function setDataValue(name,newValue) {
    
    const data = await getFormatedData();
    const keys = Object.keys(data);

    if (keys.includes(name)) {
        data[name] = newValue;
    }
    
    const finalData = JSON.stringify(data);
    setCookie(finalData);
    
}


export function checkCookie() {
    // Get all cookies from the document
    const cookies = document.cookie.split('; ');

    // Check if the specified cookieName is present in the cookies
    return cookies.some(cookie => {
        const [name, value] = cookie.split('=');
        return name === _cookieName;
    });
}


// will need to ask for cookie permision and 
// also check if they allow cookies
export function checkForCookie() {

    // check if it exists
    const check = checkCookie();

    if (!check) {
        setCookie(JSON.stringify(_initialCookie));
    }

}


// will need to ask for cookie permision and 
// also check if they allow cookies
export function resetCookieData() {


    setCookie(JSON.stringify(_initialCookie));

}

