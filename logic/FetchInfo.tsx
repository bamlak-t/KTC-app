import { API, graphqlOperation } from 'aws-amplify';
import { listNotices, listHomework, listTimetables } from '../src/graphql/queries';
import { ListNoticesQuery, ListHomeworkQuery, ListTimetablesQuery } from '../src/API';


const FetchInfo = async ( tableType: string, year: number) => {

    // console.log("fetching", tableType)
    if (tableType === "notice") {
        try {
            // console.log(user)
            const response:any = (await API.graphql(graphqlOperation(listNotices, {
                filter: {
                    year_group: {
                        eq: year
                    }
                }
                }))) as {
                data: ListNoticesQuery;
            };
            
            return(response.data.listNotices.items[0].notices)
        } catch(e) {
            console.log("error fetching data: ",e);
        }
    } else if (tableType === "timetable") {
        try {
            const response:any = (await API.graphql(graphqlOperation(listHomework, {
            filter: {
                year_group: {
                    eq: year
                }
            }
            }))) as {
            data: ListHomeworkQuery;
            };
            return(response.data.listHomework.items[0].homework)
        } catch(e) {
            console.log("error fetching data: ",e);
        }
    } else if (tableType === "homework") {
        try {
            const response:any = (await API.graphql(graphqlOperation(listTimetables, {
            filter: {
                year_group: {
                    eq: year
                }
            }
            }))) as {
            data: ListTimetablesQuery;
            };
            return(response.data.listTimetables.items[0].tables)
        } catch(e) {
            console.log("error fetching data: ",e);
        }
    }
    return 
};

export default FetchInfo;
