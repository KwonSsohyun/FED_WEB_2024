import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import mime from 'mime-types';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    try { req.body = JSON.parse(req.body); } catch(e) {}
    next();
});
app.use(cors());
app.use((req,res,next)=>{
    let isSent = false;
    const origSend = res.send;
    res.send = function (...args) {
        if(isSent) return;
        isSent = true;
        return origSend.apply(this, args);
    }
    next();
})
const storage = multer.diskStorage({
    destination:function (req,file,cb){
        const user = req.body.user;
        const dir = './' + path.join('cloud', user);
        if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const fileExt = (filename)=>{
    const ext = path.extname(filename);
    const fileNameWithoutExt = path.basename(filename, ext);
    return {ext, fileNameWithoutExt};
}
const upload = multer({storage:storage});
app.get('/upload', (req,res)=>{
    res.send(`<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>업로드 테스트 페이지</title>
            </head>
            <body>
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <input name="user"/>
                    <input name="file" type="file"/>
                    <button type="submit">업로드</button>
                </form>
            </body>
        </html>
    `);
});
app.post('/upload', upload.single('file'), (req, res)=>{
    const user = req.body.user;
    const file = req.file;
    if(!file) return res.status(400).send('파일을 업로드 해주세요.');
    const {ext, fileNameWithoutExt} = fileExt(file.originalname);
    const filePath = path.join('/cloud', user, fileNameWithoutExt);
    res.send(`파일이 ${filePath}경로에 연결되었습니다.`);
});
app.get('/direct/:user/:filename', (req,res)=>{
    const user = req.params.user;
    const filename = req.params.filename;
    const filePath = './' + path.join('cloud', user, filename);
    if(!fs.existsSync(filePath)) return res.status(404).send('해당 파일을 찾을 수 없습니다.');
    const mimeType = mime.lookup(filePath);
    res.setHeader('Content-Type', mimeType || 'application/octet-stream');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    fileStream.on('error', err=>{
        res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
    })
});
app.get('/cloud/:user/:filename', async (req,res)=>{
    const user = req.params.user;
    const filename = req.params.filename;
    req.user = user;
    const filePath = './' + path.join('cloud', user, filename + '.js');
    if(!fs.existsSync(filePath)) return res.status(404).send('해당 파일을 찾을 수 없습니다.');
    try {
        const importedModule = await import('./' + path.join('cloud', user, filename + `.js?${Math.random()}`).replaceAll('\\','/'));
        if(importedModule.default && typeof importedModule.default === 'function'){
            const result = await importedModule.default(req, res);
            res.send(result);
        }
        else res.status(400).send('파일에서 export default로 내보낸 함수가 없습니다.');
    } catch (err) {
        console.log(err);
        res.status(500).send('파일을 가져오거나 함수를 실행하는 중 오류가 발생했습니다.');
    }
});

app.listen(5555);