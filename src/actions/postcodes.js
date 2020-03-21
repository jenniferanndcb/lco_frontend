//Find Local Authority based on postcode entered 

export function findLocalAuthority(postcode){
  const postcodes = fetch("https://api.postcodes.io/postcodes" + "/" + postcode)
  
  return {
    type: "FIND_LOCAL_AUTHORITY",
    postcode: postcode
  }
}

//Receive LA from postcodes.io??