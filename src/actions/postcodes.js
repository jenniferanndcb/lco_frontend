//Find Local Authority based on postcode entered 

export function findLocalAuthority(postcode){
  return {
    type: "FIND_LOCAL_AUTHORITY",
    postcode: postcode
  }
}

//Receive LA from postcodes.io??