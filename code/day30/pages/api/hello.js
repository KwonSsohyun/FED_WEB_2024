// http://localhost:3000/app/api/hello
export default (req, res) => {
    res.status(200).json({message: "테스트 Hello 메시지"});
}