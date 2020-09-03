export const dataContentChapter = (dataSave, dataChuong) => {
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
    let desExer = listDapandung.map((desE) => desE.desExerciseFormat);
    desExer = Array.from(new Set(desExer));
    let exer = listDapandung.map((ex) => ex.exerciseFormat);
    exer = Array.from(new Set(exer));
    console.log(desExer);
    console.log(exer);
    let levels = listDapandung.map((le) => le.lever);
    levels = Array.from(new Set(levels));
    let contentChapter = listDapandung.map((chapter) => chapter.chapter);
    contentChapter = Array.from(new Set(contentChapter));
    console.log(contentChapter);

    let totalByContent = {};
    contentChapter.forEach((e, i) => {
        console.log(e);

        totalByContent[e] = {
            nameChapter: e,
            nameCtChap: [],
            nameCtChapVn: [],
            contentChuongdung: {},
            contentChuong: {},
            total: 0,
            dung: 0,
        };
        noidungChuong.forEach((ct) => (totalByContent[e].contentChuongdung[ct] = 0));
        noidungChuong.forEach((ct) => (totalByContent[e].contentChuong[ct] = 0));
        //  noidungChuong.forEach((ct) => (totalByContent[e].nameCtChap.push(ct)));
        let dataFilter = listDapandung.filter((q) => q.chapter == e);
        console.log(dataFilter);
        let dung = 0;
        dataFilter.forEach((el) => {
            console.log(el.kq);
            // totalByContent[e].contentChuongdung[el.exerciseFormat]+=1;  
            if (el.kq == "dung") {
                dung++;
                totalByContent[e].contentChuongdung[el.exerciseFormat] += 1;
            }
            totalByContent[e].contentChuong[el.exerciseFormat] += 1;
        })
        totalByContent[e].dung = dung;
        totalByContent[e].total = dataFilter.length;
    })
    console.log(totalByContent);
    return totalByContent;
}