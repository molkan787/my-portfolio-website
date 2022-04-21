import { setTitle } from './UIR'
import config from '../config'
import utils from './utils'

window.setTitle = setTitle

export default class Logic{

    static async postMessage(data){
        const url = config.ApiBaseURL + 'postMessage'
        const resp = await utils.postJSON(url, data)
        if(resp.status !== 'OK'){
            throw new Error('Unknow Error')
        }
    }

}