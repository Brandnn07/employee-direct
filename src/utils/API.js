import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

function getEmployees() {
        return axios.get(BASEURL).then(({data}) => {
            return data.results
        })
    }


export default getEmployees;