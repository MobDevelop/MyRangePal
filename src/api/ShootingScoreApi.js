import * as firebase from 'firebase';
import Moment from 'moment';
const UserID = "test"
var db = {};

export function saveScoreAPI(appData){
    db = firebase.database();
    var date = appData.date
    date = String(Moment(date).format('YYYYMMDDHHmmSS'))
    var actionData = {};
    actionData.count = appData.seriesCount
    actionData.values = appData.seriesValue
    actionData.total = appData.total
    actionData.date = appData.date
    actionData.note = appData.note
    db.ref("ShootingScore/" + UserID).child(appData.seriesCount).child(date).set(actionData)
}