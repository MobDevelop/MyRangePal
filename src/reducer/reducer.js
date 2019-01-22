function saveScore(){

}

const initialState = {
  saving: 0,//0: init 1: saving 2: fail 3: timeout 4: success
  appData : {
    radioData : [
        { label : '30', color : 'white', labelColor: 'white' } ,
        { label : '40', color : 'white', labelColor: 'white' } ,
        { label : '60', color : 'white', labelColor: 'white' } 
    ],
    seriesCount : 3,
    seriesValue : [
        { value : 0 },
        { value : 0 },
        { value : 0 },
        { value : 0 },
        { value : 0 },
        { value : 0 }
    ],
    total : 0,
    note : "",
    date : new Date()
  }
};

export function ShootingScore(state = initialState, action) {
    switch (action.type) {
      case 'SAVING_SCORE':
        return { ...state, saving: 1}
      case 'SAVE_APP_DATA':
        return { ...state, appData: Object.assign({}, action.appData)}
      case 'SAVING_SUCCESS' :
        return { ...state, saving: 4}
      case 'SAVING_FAIL' :
        return { ...state, saving: 2}
      case 'SAVING_TIMEOUT' :
        return { ...state, saving: 3}
      case 'INIT_SAVING' :
        return { ...state, saving: 0, appData: initialState.appData}
      default:
        return state;
    }
  }
  