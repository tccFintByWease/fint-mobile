const getTodayDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    return today.toString();
}

const formatDatetime = (date) => {
    try {
        const formatedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

        return formatedDate;
    } catch (error) {
        console.log(error);
    }
}

const formatDate = (date) => {
    let fullDateTime = formatDatetime(date);
    // return yyyy-mm-dd hh:mm:ss

    fullDateTime = fullDateTime.split(' ');

    return fullDateTime[0];
}

export {
    getTodayDate,
    formatDatetime,
    formatDate
}