export default async function handlerData(req, res) {
    const response = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
    const data = await response.json();
    res.status(200).json(data);
}