
export function addProgramme(programme){
  return {
    type: "ADD_PROGRAMME",
    programme: Object.assign({}, programme, {votes: 0})
  }
}

export function removeProgramme(programmeId){
  return {
    type: "REMOVE_PROGRAMME", 
    programmeId: programmeId
  }
}

export function upvoteProgramme(programmeId){
  return {
    type: "UPVOTE_PROGRAMME",
    programmeId: programmeId
  }
}

export function downvoteProgramme(programmeId){
  return {
    type: "DOWNVOTE_PROGRAMME",
    programmeId: programmeId
  }
}