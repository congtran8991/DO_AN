export * from './actCreateTest';
export * from './actSaveThequiz';
export * from './actLogin';
export * from './actShowChart';
export * from './actRegis';
export * from './actLogout';
export * from './actSendContact';
export * from './actNav';
export * from './actUpdateAccount';
// import * as Types from './../constants/ActionType';
// import { Axios } from '../Utils/Axios';
// export const actCreateTest = (dataCreateTest) => {
//     // return {
//     //     type: Types.CREATE_TEST,
//     //     dataCreateTest
//     // }
//         return async dispatch => {
//             let createQuestion=await Axios('post', '/Api/question/taode',dataCreateTest);
//             console.log(createQuestion.data);
//             dispatch({
//                 type: Types.CREATE_TEST,
//                 dataCreateTest,
//                 testQuestion:createQuestion.data,
//                 redirect: true
//             })
//     }
// }
// export const deleteAppCompany = (deleteData, categoryId) => {
//     return dispatch => {
//         (async () => {
//             dispatch({
//                 type: Types.LOADING_FULL_PROJECT,
//                 isChechFillLoading : false
//             })
//             await Axios('delete', '/Api/listCompany', deleteData);
//             let findListCompany = await Axios('get', '/Api/listCompany/' + categoryId);
//             dispatch({
//                 type: Types.DELETE_APP_COMPANY,
//                 listAppCompanys: findListCompany.data,
//                 checkDelete: true,
//                 selectedCheck: false,
//                 isChechFillLoading : true
//             })
//         })()
//     }
// }