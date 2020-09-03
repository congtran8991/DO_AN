export const dataStatistical = () => {
    let dataSave = JSON.parse(sessionStorage.dataSave)
    console.log(dataSave);
    let dataChuong = JSON.parse(sessionStorage.dataChuong);
    let listdatas = dataSave.listQuestionTest;
    let dapan = dataSave.correct;
    let noidungChuong = dataChuong;
    let listDapandung = listdatas.map((listdata, index) => {
        if (listdata.correctAnswer == dapan[index]) {
            return (
                { ...listdata, kq: "dung" }
            )
        } else {
            return (
                { ...listdata, kq: "sai" }
            )
        }
    })
    console.log(listDapandung);
    let desExer = listDapandung.map((desE) => desE.desExerciseFormat);
    desExer = Array.from(new Set(desExer));
    let exer = listDapandung.map((ex) => ex.exerciseFormat);
    exer = Array.from(new Set(exer));
    console.log(desExer);
    let levels = listDapandung.map((le) => le.lever);
    levels = Array.from(new Set(levels));

    let totalByContent = {};
    exer.forEach((e, i) => {
        console.log(e);
        totalByContent[e] = {
            nameContent: desExer[i],
            total: 0,
            dung: 0,
            levels: {},
            levelsDung: {}
        };
        levels.forEach((lv) => (totalByContent[e].levels[lv] = 0));
        levels.forEach((lv) => (totalByContent[e].levelsDung[lv] = 0));
        let dataFilter = listDapandung.filter((q) => q.exerciseFormat == e);
        let dung = 0;
        console.log(dataFilter);
        dataFilter.forEach((el) => {
            if (el.kq == "dung") {
                dung++;
                //console.log(totalByContent[e].levelsDung["nhan"]);
                totalByContent[e].levelsDung[el.lever] += 1;
                console.log(totalByContent[e].levelsDung[el.lever]);
            }
            totalByContent[e].levels[el.lever] += 1;
            //totalByContent[e].levelss[el.lever]+=1;
        })
        totalByContent[e].dung = dung;
        totalByContent[e].total = dataFilter.length;
    })
    console.log(totalByContent);

    // let listDapandung = listdatas.map((listdata,index)=>{
    //     if(listdata.correctAnswer == dapan[index]){
    //         return (
    //             {...listdata,kq:"dung"}
    //         )
    //      }else{
    //         return (
    //             {...listdata,kq:"sai"}
    //         )
    //      }
    // })
    // console.log(listDapandung);
    // console.log(noidungChuong);

    return totalByContent;
}