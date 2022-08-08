async function getAgents(lang){
    const data = await fetch(`https://valorant-api.com/v1/agents?language=${lang}&isPlayableCharacter=true`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getAgentsByUuid(uuid, lang){
    const data = await fetch(`https://valorant-api.com/v1/agents/${uuid}?language=${lang}`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getWeapons(lang){
    const data = await fetch(`https://valorant-api.com/v1/weapons?language=${lang}`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getWeaponsByUuid(uuid, lang){
    const data = await fetch(`https://valorant-api.com/v1/weapons/${uuid}?language=${lang}`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getMaps(lang){
    const data = await fetch(`https://valorant-api.com/v1/maps?language=${lang}`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getMapsByUuid(uuid, lang){
    const data = await fetch(`https://valorant-api.com/v1/maps/${uuid}?language=${lang}`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

module.exports = {
    getAgents,
    getAgentsByUuid,
    getWeapons,
    getWeaponsByUuid
}