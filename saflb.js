async function getIP() {
    const abstract = "https://ipgeolocation.abstractapi.com/v1/?api_key=2dd4fd7102604c439d4e7e43eccb73fe"

    const res = await fetch(abstract)
    const data = await res.json()
    return data
}

export default async function saflb(name, url) {
    const ipInfo = await getIP()
    const currentDoc = db.collection('visitors').doc(`${name}`)

    currentDoc.get().then(doc => {
        if (!doc.exists) {
            currentDoc.set({
                name,
                url,
                info: [
                    {
                        ip: ipInfo.ip_address,
                        city: ipInfo.city,
                        country: ipInfo.country,
                        lat: ipInfo.latitude,
                        long: ipInfo.longitude,
                        unixTime: + new Date(),
                        ua: navigator.userAgent
                    }
                ]
            })
        } else {
            currentDoc.update({
                info: firebase.firestore.FieldValue.arrayUnion(
                    {
                        ip: ipInfo.ip_address,
                        city: ipInfo.city,
                        country: ipInfo.country,
                        lat: ipInfo.latitude,
                        long: ipInfo.longitude,
                        unixTime: + new Date(),
                        ua: navigator.userAgent
                    }
                )
            })
        }
    })
}