export default async () => {
    const result = await fetch("사용자 API 경로").then(v=>v.json());
    return JSON.stringify(result);
 }