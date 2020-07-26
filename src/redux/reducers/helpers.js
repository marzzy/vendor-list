function normalizeData(data) {
    return data.map(dataItem => {
        return {
            id: dataItem.data.vendorCode,
            title: dataItem.data.title,
            logo: dataItem.data.logo,
            description: dataItem.data.description,
            rate: dataItem.data.rate,
            address: dataItem.data.address,
            countReview: dataItem.data.countReview,
        }
    })
}

export {
    normalizeData,
}