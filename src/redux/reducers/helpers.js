function normalizeData(data) {
    return data.map(dataItem => {
        return {
            id: dataItem.data.vendorCode,
            title: dataItem.data.title,
            logo: dataItem.data.logo,
        }
    })
}

export {
    normalizeData,
}